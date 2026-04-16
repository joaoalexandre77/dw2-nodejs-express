// Importando o Express
// const express = require("express")
import express from "express";

//Importando o Controller de Cliente (onde estão as rotas)
import ClienteController from "./controller/ClienteController.js";
import PedidoController from "./controller/PedidoController.js";
import ProdutoController from "./controller/ProdutoController.js";
import Cliente from "./models/Cliente.js";
import Pedido from "./models/Pedido.js";
import associations from "./config/associations.js";

// Importando o arquivo de conexão com o banco
import connection from "./config/sequelize-config.js";


// Realizando a conexão com o banco de dados
connection.authenticate()
.then((response) => {
    console.log("Conexão com o banco de dados realizada com sucesso")
})
.catch((e) => {console.log(e)});

// Criando o banco de dados (Somente se ainda não existir)
connection.query("CREATE DATABASE IF NOT EXISTS loja_relacional").then(() => {
    console.log("O banco de dados está criado");
})
.catch((e) => {
    console.log(`Ocorreu um erro ao criar o banco de dados. erro: ${e}`);
})


// Invokando a função que cria as associacoes
associations();

//Sincronizando as tabelas
Cliente.sync({force: false});
Pedido.sync({force: false});

// Iniciando o Express 
const app = express() 
// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs')

//Define o urlencoded para aceitar dados de formularios
app.use(express.urlencoded({extended: false}));

// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('public'))

// Ativando o uso das rotas 
app.use("/", ClienteController);

app.use("/", PedidoController);

app.use("/", ProdutoController);

// ROTA PRINCIPAL
app.get("/",function(req,res){
    res.render("index")
})

// INICIA O SERVIDOR NA PORTA 8080
const port = 8080
app.listen(port, function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log(`Servidor iniciado com sucesso em http://localhost:${port}`)
    }
})