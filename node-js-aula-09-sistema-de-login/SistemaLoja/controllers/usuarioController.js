import express from "express";

const router = express.Router();

//Importando models
import Usuario from "../models/Usuario.js";

//Importando o BCRYPT (hash de senha)
import bcrypt from "bcrypt";
import { where } from "sequelize";

//Rota de formulário de cadastro de usário
router.get("/cadastro", (req, res) => {
    res.render("cadastro");
})


router.get("/login", (req,res) => {
  res.render("login");
})

//Rota de criação de usuário no banco
router.post("/caduser", (req, res) => {
    // COLETANDO AS INFORMAÇÕES DO FORMULÁRIO
    const email = req.body.email;
    const senha = req.body.senha;
    //Verificando se o usuario ja existe
    Usuario.findOne({where: {email:email}}).then(usuario => {
        //Se não houver um usuario igual
        if(usuario == undefined) {
            //Aqui será feito o has de senha
            //Criando o "sal" do hash
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(senha, salt);

            //Enviando para o banco
            Usuario.create({
                email: email,
                senha: hash
            }).then(() => {
                res.redirect("/login");
            }).catch(er => {
                console.log("Não foi possível cadastrar o usuário." + er);
            })
        } else {
            //Se ja houver um usuario com o mesmo email
            res.send(`Usuário já cadastrado
                <br><a href="/login">Faça o login</a>`);
        }
    }) 
})

//Rota de autenticação (login)
router.post("/autenticacao", (req, res) => {
    // Capturando os dados do formulário de login
    const email = req.body.email;
    const senha = req.body.senha;
    //Buscando o usuario no banco
    Usuario.findOne({where: {email:email}}).then(usuario => {
        //Se o usuario existir
        if(usuario != undefined) {
            // Valida a senha
            const correct = bcrypt.compareSync(senha, usuario.senha);
            //Se a senha for valida
            if(correct) {
                // Autoriza o login
                // Cria a sessão para o usuario
                req.session.usuario = {
                    // Inserindo as informações do usario na sessão
                    id: usuario.id,
                    email: usuario.email
                }
                res.send(`Sessão do usuário criada com sucesso!<br>
                    ID do usario logado: ${req.session.usuario['id']} <br>
                    E-mail do usuario logado: ${req.session.usuario['email']}`)     
                // res.redirect("/");
                // se a senha estiver incorreta
            } else {
                res.send(`Senha inválida! 
                    <br><a href="/login">Tente novamente.</a>`);
            }
            // Se o usuario nao existir
        } else {
            res.send(`O usario informado não existe!
                <br><a href="/login">Tente novamente</a>`)
        }
    })
})

export default router;
