//controller de usuario
import express from "express";
const router = express.Router();
// importando o model
import Usuario from "../models/Usuario.js"
//importando o bcrypt (hash de senha)
import bcrypt from "bcrypt";

//ROTA DE LOGIN
router.get("/login",function(req, res){
    res.render("login", {
        messages: req.flash(),
        loggeOut: true,
    })
   
})

//ROTA DE LOGOUT
router.get("/logout", (req,res)=>{
    //LIMPANDO A SESSÃO 
    req.session.usuario=undefined
    res.redirect("/")
})

//ROTA DO FORMULARIO DE CADASTRO DO USUARIO
router.get("/cadastro", (req, res)=>{
    res.render("cadastro", {
        //RECEBENDO AS MENSAGENS
        messages: req.flash(),
        loggeOut: true,
    });
});

//rota de criação de usuario no banco
router.post("/caduser", (req, res)=>{
    //coletando as informaçoes do formulario
    const email = req.body.email
    const senha = req.body.senha
    //verificando se o usuario já existe
    Usuario.findOne({where: {email: email}}).then(usuario => {
        //se não houver um usuario igual
        if (usuario == undefined){
            //aqui sera feito o hash de senha

            //criando o sal do hash
            const salt =bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(senha, salt);
            //Enviando para o banco
            Usuario.create({
                email: email,
                senha: hash,
            }).then(()=> {
                res.redirect("/login")
            }).catch(error=> {
                console.log("Não foi possivel cadastrar o usuario" + error)
            });

        }else{
            //se houver um usuario com o mesmo email
           // res.send(`Usuario já cadastrado! 
                //<br><a href="/login"> Faça o login. </a> `)
                req.flash('danger', 'o usuario já está cadastrado! faça o login.')
                res.redirect("/cadastro")
        }

    })
    
});

//rota de autentificacao(login)
router.post("/autentificacao", (req, res) =>{
    //capturando os dados do formulario de login
    const email = req.body.email
    const senha = req.body.senha
    //buscando o usuario no banco
    Usuario.findOne({ where: { email: email}}).then(usuario =>{
        //se o usuario existir
        if (usuario != undefined){
            //valida a senha
            const correct = bcrypt.compareSync(senha, usuario.senha)
            //se a senha for valida
            if(correct){
                //AUTORIZA O LOGIN
                //CRIA A SESSAO PARA O USUARIO
                req.session.usuario = {
                    id: usuario.id,
                    email:usuario.email
                }
                //console.log(req.session.usuario)
               // res.send(`Sessao do usuario criada com sucesso!
                   // ID do usuario logado: ${req.session.usuario['id']} <br>
                    //E-mail do usuario logado: ${req.session.usuario['email']}`)

                 //enviando alerta de sucesso   
                req.flash('success', 'Login efetuado com sucesso!')
                res.redirect("/");

                //se a senha tiver incorreta
            }else{
                //res.send(`Senha invalida!
                    //<br><a href="/login">Tente novamente.</a>`)
                    req.flash('danger', 'Senha está incorreta. Tente novamente')
                    res.redirect("/login")
            }
            // se o usuario não existir
        }else{
            //res.send(`O usuario informado nao existe!
                //<br><a href="login">Tente novamente. </a>`)
                req.flash('danger','o usuario informado não existe! verifique os dados e tente novamente!')
                res.redirect("/login")
        }
    })
})


//exportando o modulo
export default router;
