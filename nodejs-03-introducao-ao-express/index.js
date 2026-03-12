// O arquivo index.js é o arquivo principal do projeto

//Importando o Módulo do Express
const express = require("express");

//Criando uma instância do Express
const app = express();

//Configurando o EJS
app.set('view engine', 'ejs');

//Criando a rota principal do site("/")
app.get("/", (req, res) => {
    res.render("index");
})

//Criando a rota de perfil do usuario
app.get("/perfil", (req, res) => {
    res.render("perfil");
})

//Criando a rota de perfil do usuario
app.get("/clientes", (req, res) => {
    res.render("clientes");
})

//Criando a rota de perfil do usuario
app.get("/produtos", (req, res) => {
    res.render("produtos");
})

//Criando a rota de perfil do usuario
app.get("/servicos", (req, res) => {
    res.render("servicos");
})

// Iniciando o servidor na porta 8080
const port = 8080;
app.listen(port, function(error) {
    if(error) {
        console.log("Ocorreu um erro ao iniciar o servidor!");
    } else {
        console.log(`Servidor inicializado com sucesso no endereço: http://localhost:${port}`)
    }
})