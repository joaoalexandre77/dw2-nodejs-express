import express from "express"
const router = express.Router()
import Produto from "../models/Produto.js"
import Auth from "../middlewares/Auth.js"

// ROTA PRODUTOS
router.get("/produtos", Auth,function(req,res){
    Produto.findAll().then(resultado => {
         res.render("produtos", {
         produtos: resultado

    })
    }).catch(error => {
        console.log("Ocorreu um erro ao buscar os produtos"+ error)
    })
})

router.post("/produtos/cadastrar", Auth,function(req, res){
    const preco = req.body.preco;
    const nome = req.body.nome;
    const categoria = req.body.categoria;
    Produto.create({nome: nome, preco: preco, categoria: categoria}).then(()=> {
        res.redirect("/produtos")
    }).catch((error )=> {
        console.log("Ocorreu um erro ao criar os produtos"+ error)
    })
})
    
router.get("/produtos/excluir/:id", Auth, (req, res) =>{
    const id = req.params.id
    Produto.destroy({
        where: {
            id: id
        }
    }).then(() =>{
        res.redirect("/produtos")
    }).catch(error => {
        console.log("Ocorreu um erro ao excluir o produto" + error)
    })
})
export default  router;