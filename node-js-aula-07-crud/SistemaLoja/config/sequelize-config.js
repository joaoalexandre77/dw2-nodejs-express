// Importando a ORM Sequelize
import Sequelize from "sequelize";

// Definindo os dados de conexão com o banco de dados
const connection = new Sequelize({
    //tipo do banco
    dialect: 'mysql',
    // Endereço do banco
    host: 'localhost',
    // Nome de usuario do banco
    username: 'root',
    // Senha
    password: '',
    // Fuso horário
    timezone: '-03:00',
    //Nomde do banco que sera usado na aplicacao
    database: 'sistemaloja'
    
});

export default connection;