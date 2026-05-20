import Sequelize from  "sequelize";
//definindo os dados de conexao com o banco de dados
const connection = new Sequelize({
    //tipo de banco
    dialect: 'mysql',
    //endereço do banco
    host: 'localhost',
    //nome do usuario do banco
    username:'root',
    //senha
    password:'',
    //fuso horario
    timezone:"-03:00",
    //nome do banco que sera usado na aplicação
     database: 'loja_relacional'
});

    //expotando o modulo
    export default connection;