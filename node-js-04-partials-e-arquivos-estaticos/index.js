// O arquivo index.js é o arquivo principal do projeto

//Importando o Módulo do Express
const express = require("express");

//Criando uma instância do Express
const app = express();

//Configurando o EJS
app.set('view engine', 'ejs');

//Definindo a pasta public como diretório para arquivos estaticos
app.use(express.static('public'));

//Criando a rota principal do site("/")
app.get("/", (req, res) => {
    res.render("index");
})

//Criando a rota de perfil do usuario
app.get("/perfil", (req, res) => {
    res.render("perfil");
})

//Criando a rota de clientes do usuario
app.get("/clientes", (req, res) => {
    const listaUsers = ['João', 'Kevin', 'Jocieli', 'Haimon', 'Douglas']
    res.render("clientes", {listaUsers : listaUsers});
})

//Criando a rota de clientes do usuario
app.get("/clientes/:cliente", (req, res) => {
    const cliente = req.params.cliente;
    res.render("detalheClientes", {cliente : cliente});
})

//Criando a rota de produtos do usuario
app.get("/produtos", (req, res) => {
    const listaProdutos = ['computador', 'celular', 'tablet', 'notebook']
    res.render("produtos", {
        //Enviando varaáveis para a página HTML
        listaProdutos : listaProdutos
    });
})


//Criando a rota de produtos do usuario - com parâmetros
app.get("/produtos/:produto", (req, res) => {
    const produto = req.params.produto;
    res.render("detalheProdutos", {
        produto : produto
    });
})

//Criando a rota de perfil do usuario
app.get("/servicos", (req, res) => {
    // ARRAY DE OBJETOS
    const servicos = [
        {servico : "Desenvolvimento de webSites", descricao : "Criação de sites com Node.js e integração a banco de dados", preco : 2000 },
        {servico : "Auditoria de UX/UI", descricao : "Avaliação da usabilidade de sistemas com sugestões de melhoria", preco : 1000 },
        {servico : "Infraestrutura em Nuvem", descricao : "Configuração de servidores e hospedagem", preco : 3000 },
        {servico : "ChatBot com Ia", descricao : "Desenvolvimento de chatbot para atendimento automatico", preco : 500 }
    ]
    res.render("servicos", {
        servicos : servicos
    });
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