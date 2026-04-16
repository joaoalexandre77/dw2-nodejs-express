// Forma de importar commonJS (antiga)
// Const express = require("express")

// Importando o Express com ES6 Modules (nova)
import express from "express";

// Método do Express para criar rotas da aplicacao
const router = express.Router();

// Importando o Model de Cliente
import Cliente from "../models/Cliente.js";
import { where } from "sequelize";

// ROTA CLIENTES
router.get("/clientes",function(req,res){
    //Aqui iremos chamar o model "Cliente", invocar o método findAll() para buscar todos os registros da tabela de cliente
    Cliente.findAll().then(response => {
        res.render("clientes", {
            clientes: response
        })
    }).catch(error => console.log("Ocorreu um erro ao buscar os clientes." + error))
})

//Rota de cadastro de clientes (subrota / cadastrar
router.post("/clientes/cadastrar", (req, res) => {
    //Criando as variaveis que irao armazenar os dados vindos do fomulario
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const endereco = req.body.endereco;
    
    //Enviando os dados para o banco
    //O metodo create cadastra informacoes no banco
    Cliente.create({nome : nome, cpf: cpf, endereco: endereco})
    .then(() => {
        res.redirect("/clientes")
    })
    .catch((e) => console.log(e));
})

router.get("/clientes/excluir/:id", (req, res) => {
    const id = req.params.id;
    //Enviando o ID do cliente para apagar do banco de dados
    Cliente.destroy({
        where : {
            id: id
        }
    }).then(() => {
        res.redirect('/clientes');
    }).catch((e) => {
        console.log(e)
    })
})

router.get("/clientes/editar/:id", (req, res) => {
    const id = req.params.id;
    Cliente.findByPk(id).then(response => {
        res.render('clienteEditar', {
            cliente: response
        })
    })
})

router.post("/clientes/alterar/:id", (req, res) => {
    const nome = req.body.nome;
    const cpf = req.body.cpf;
    const endereco = req.body.endereco;
    const id = req.body.id;

    Cliente.update(
        {
            nome : nome,
            cpf : cpf,
            endereco : endereco
        },
        {
            where: {id: id}
        }
    ).then(() => {
        res.redirect("/clientes")
    });
});

// Exportandp o módulo para usá-lo em outro arquivo
export default router;