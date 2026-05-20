//MIDDLEWARE DE AUTENTIFICAÇÃO

function Auth(req,res, next){
    //Verificar se existe uma sessão para usuario
    if(req.session.usuario != undefined){
        //permite o prosseguimento
        next();
        //se não existir a sessão
    }else{
        //exibe a pagina de login para usuario
        res.redirect("/login");
    }
}
export default Auth;