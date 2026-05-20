
//Este arquivo ira criar as associçoes entre as tabelas
//importando os models
import Cliente from "../models/Cliente.js";
import Pedido from "../models/Pedido.js";

//definindo as associaçoes entre os Models
const associacoes = () => {
    // Um pedido possui muitos pedidos
    Cliente.hasMany(Pedido, { foreignkey: "cliente_id"})
    // Um pedido possui um cliente
    Pedido.belongsTo(Cliente, {foreignkey: "cliente_id"})

}
export default associacoes;