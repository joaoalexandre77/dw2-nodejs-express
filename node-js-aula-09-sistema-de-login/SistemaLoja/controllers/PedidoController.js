import express from "express";
const router = express.Router();

import Pedido from "../models/Pedido.js";
import Cliente from "../models/Cliente.js";
import { where } from "sequelize";
// ROTA PEDIDOS
router.get("/pedidos", function (req, res) {
   // Fazendo INNER JOIN para trazer as informações do Cliente Junto com as informações do Pedido

  // Realizando ambas as consultas em paralelo
  Promise.all([
    Pedido.findAll({
      include: [
        {
          model: Cliente, //Inclui o modelo Cliente relacionado
          required: true,//Garante que somente pedidos com clientes relacionados sejam retornados
        },
      ],
    }),
    //Busca todos os clientes
    Cliente.findAll(),
  ])
.then(([pedidos, clientes]) =>{
  res.render("pedidos", {
    pedidos:pedidos,
    clientes : clientes
  })
}).catch(error => {
  console.log(`Ocorreu um erro ao listar os pedidos. ${error}`)
});
});

// Rota de cadastro de pedidos
router.post("/pedidos/cadastrar", (req, res) => {
  // Capturar os dados do fomulário
  const numero = req.body.numero;
  const valor = req.body.valor;
  const clienteId = req.body.clienteId;
  // Cadastrando no banco
  Pedido.create({
    numero: numero, valor: valor, clienteId: clienteId
  }).then(() => {
    res.redirect("/pedidos");
  }).catch(e => {
    console.log(e);
  })
})

// Rota de exclusão de pedidos
router.get("/pedidos/excluir/:id", (req, res) => {
  const id = req.params.id;
  Pedido.destroy({
    where: {
      id:id
    },
  }).then(() => {
    res.redirect("/pedidos");
  }).catch(e => {
    console.log(e);
  })
})

export default router;
