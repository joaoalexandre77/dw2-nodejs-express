import  Sequelize  from "sequelize";
import connection from "../config/sequelize-config.js";

const Produto = connection.define(
    "produto",{
        nome: {
            type:Sequelize.STRING,
        },
        preco:{
           type: Sequelize.DOUBLE 
        },
        categoria: {
            type: Sequelize.STRING
        }
    }
)
Produto.sync({force:false})
export default Produto;