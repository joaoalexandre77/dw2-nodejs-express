import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";
//Criando o Model
// O metodo define() do Sequelize cria uma tabela no banco de dados
const Cliente = connection.define('clientes', {
    nome:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    cpf:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    endereco:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    
});
// O medoto sync() sincroniza od dados com o banco
// force : False : não recria a tabela cado ela já exista
//Cliente.sync({ force:false})

export default Cliente;