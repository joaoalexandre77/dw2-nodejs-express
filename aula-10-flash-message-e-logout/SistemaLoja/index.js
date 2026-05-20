// Importando o Express
//const express = require("express")
import express from "express";
//importando o Espress Flash
import flash from "express-flash";





//Importando o Controlador de Cliente (onde estão as rotas)
import ClienteController from "./controllers/ClienteController.js"
import ProdutoController from "./controllers/ProdutoController.js"
import PedidoController from "./controllers/PedidoController.js"
import Auth from "./middlewares/Auth.js"
//importando o usuario controller
import UsuarioController from "./controllers/UsuarioController.js";
//importando o express-session ( gerador de sessoes do express)
import session from "express-session";

//importando o arquivo de conexao com o bando
import connection from "./config/sequelize-config.js"; 
// realizando a conexao com o banco de dados

//Importando os models
import Cliente from "./models/Cliente.js";
import Pedido from "./models/Pedido.js";
//importando o Model  de Usuario
import Usuario from "./models/Usuario.js";

//importando as Associaçoes
import associacoes from "./config/association.js";
//realizando a conexao com o banco de dados
connection.authenticate().then(() => {
    console.log("Conexao com o banco de dados realizada com sucesso!")
}).catch((error)=> {
    console.log(`Ocorreu um erro ao se conectar ao banco. ${error}`);
});

//criando o banco de dados
connection.query("CREATE DATABASE IF NOT EXISTS loja_relacional").then(() => {
    console.log("O banco de dados está criado!");
}).catch((error) =>{
    console.log(`Ocorreu um erro ao criar o banco de dados.Erro: ${error}`);
});

//invocando a função que cria as associaçoes
associacoes();

//sincronizando os models de Cliente e Pedido
//transformando as funçoes em promessas

Promise.all(
    [
    Cliente.sync({force:false}),
    Pedido.sync({force:false})
    ]
).then(()=>{
    console.log("Entidades criadas e relacionadas com sucesso!");
}).catch(error=> {
    console.log("Ocorreu um erro ao sincronizar os Models" + error);
})
// Iniciando o Express 

const app = express() 
//consigurando o express flash
app.use(flash())
// Define o EJS como Renderizador de páginas
app.set('view engine', 'ejs')
// Define o uso da pasta "public" para uso de arquivos estáticos
app.use(express.static('public'))

//configurando om express para aceitar dados vindo de formularios
app.use(express.urlencoded({extended: false}))

//configurando a sessão de usuarios
app.use(session({
    secret:"minhalojasecret",
    cookie: {maxAge: 3600000}, //sessão exprira em 30 segundos (mudar depois)
    saveUninitialized: false, // não salva vazias (sem informaçoes)
    resave: false, // Evita que re-salve sessoes
}));

// ativando o uso das ROTAS
app.use("/", ClienteController)
app.use("/", ProdutoController)
app.use("/", PedidoController)
app.use("/", UsuarioController);



// ROTA PRINCIPAL
app.get("/", Auth,function (req,res){
    res.render("index", {
        //COLETANDO A FLASH MESSAGE 
        messages : req.flash()
    })
})
//Rota de login


// INICIA O SERVIDOR NA PORTA 8080
const port = 8080
app.listen(port, function(erro){
    if(erro) {
        console.log("Ocorreu um erro!")

    }else{
        console.log(`Servidor iniciado com sucesso em http://localhost:${port}`)
    }
})