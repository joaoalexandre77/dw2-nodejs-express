import Cliente from "../models/Cliente.js";
import Pedido from "../models/Pedido.js";

const associations = () => {
    Cliente.hasMany(Pedido, {
        foreingKey: "cliente_id"
    })

    Pedido.belongsTo(Cliente, {
        foreingKey: "cliente_id"
    })
}

export default associations;