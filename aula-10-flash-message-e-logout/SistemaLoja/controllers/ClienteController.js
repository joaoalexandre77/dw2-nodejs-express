//Forma de importar CommomJS (antiga)
//const express = require ("express")
//Importando o Express com ES6 Modules (nova)

import express from "express"
// Metodo do Express usado para criar as rotas da aplicação

const router = express.Router()
//importando o model de cliente 
import Cliente from "../models/Cliente.js"

//ImpoRtando O MIDDLEWARE DE AUTENTIFICAÇÃO
import Auth from "../middlewares/Auth.js"

// ROTA CLIENTES
router.get("/clientes", Auth, function(req,res){
//    const clientes = [
//         {nome: "Ana Silva", cpf: "123.456.789-00", endereco: "Rua das Flores, 123, Bairro Jardim Primavera, Cidade Felicidade, Estado do Sonho, CEP: 12345-678"},
//         {nome: "Pedro Almeida", cpf: "987.654.321-00", endereco: "Avenida Central, 456, Bairro Centro, Cidade Nova, Estado da Esperança, CEP: 98765-432"},
//         {nome: "Marina Oliveira", cpf: "456.789.123-00", endereco: "Travessa dos Sonhos, 789, Bairro Vista Linda, Cidade Sol Nascente, Estado da Harmonia, CEP: 54321-987"},
//         {nome: "Rafael Santos", cpf: "321.654.987-00", endereco: "Praça da Amizade, 321, Bairro Bela Vista, Cidade Alegria, Estado da Serenidade, CEP: 87654-321"}
//     ]
        //aqui iremos chamar o model "Cliente", invocar o metodo findAll() para buscar todos os registros da tabela cliente.
        Cliente.findAll().then(clientes => {
            res.render("clientes",{
                clientes: clientes
            })
        }).catch(error=> {
            console.log("Ocorreu um erro ao buscar os clientes"+ error)
        });
})

//Rota de cadastro de clientes(subrota/cadastrar)
router.post("/clientes/cadastrar", Auth,(req, res) =>{
    //criando as variaveis que iram armazenar os dados vindos do formulario
    const nome =req.body.nome;
    const cpf= req.body.cpf;
    const endereco = req.body.endereco;

    //Enviando os dados para o banco 
    //O metodo cliente cadastra informaçoes no BD
    Cliente.create({
//coluna // variavel
    nome: nome,
    cpf: cpf,
    endereco: endereco,
    // se a promessa for bem sucedida o usuario sera redimensionado para a pagina de clientes
}).then(() => {
    res.redirect("/clientes")
    //falha na promessa
}).catch(error => {
    console.log("ocorreu um erro ao cadastrar o cliente"+ error)
});

    });
    //ROTA DE EXCLUSAO DE CLIENTE
    router.get("/clientes/excluir/:id", Auth,(req,res)=>{
        //capturando o parametro da rota
        const id = req.params.id
        //Enviando o id do cliente para apagar do bando de dados
        Cliente.destroy({
            where : {
//Banco // parametro recebido
                id: id
            }
        }).then(() => {
            res.redirect("/clientes")
        }).catch(error => {
            console.log("ocorreu um erro ao excluir o cliente" + error);
        })
    })
    //rota de edição de cliente
    router.get("/clientes/editar/:id",Auth, (req, res)=> {
        const id= req.params.id
        //Buscando cliente no banco
        Cliente.findByPk(id).then(cliente=> {
            res.render("clienteEditar",{
                //passando os dados do cliente para a pagina
                cliente:cliente,
            })
        })
    })
// ROTA DE ALTERAÇÃO DE CLIENTE
router.post("/cliente/alterar/:id", Auth,(req, res)=> {
    //coletando os dados do formulario
    const nome = req.body.nome
    const cpf = req.body.cpf
    const endereco = req.body.endereco
    const id = req.body.id
    // Alterando o Cliente no banco
    Cliente.update(
        {
            nome: nome,
            cpf: cpf,
            endereco: endereco,
        }, 
        {where : {id: id}}
    ).then(() =>{
        res.redirect("/clientes")
    })

})
// server para exportar o modulo para usar em outro arquivo
export default router;