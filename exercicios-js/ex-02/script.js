const listaClientes = [{
    nome : "Joao",
    endereco : "Rua A, Centro, Registro - SP",
    cpf : 52443212300
},
{
    nome : "Jocieli",
    endereco : "Rua B, Centro, Registro - SP",
    cpf : 56378965411
},
{
    nome : "Kevin",
    endereco : "Rua C, Centro, Registro - SP",
    cpf : 12332454600
}]

listaClientes.forEach((cliente) => {
    document.writeln(`Nome: ${cliente.nome} | ${cliente.endereco} | ${cliente.endereco} <br><br>`);
})

listaClientes.push({
    nome : "Haimon",
    endereco : "Rua d, Centro, Registro - SP",
    cpf : 12345678900
})

document.writeln("-----------------------------------------------------------------------------------");

listaClientes.forEach((cliente) => {
    document.writeln(`<br>Nome: ${cliente.nome} | ${cliente.endereco} | ${cliente.endereco} <br><br>`);
})


listaClientes.unshift({
    nome : "Kaua",
    endereco : "Rua e, Centro, Registro - SP",
    cpf : 12345678900
})

document.writeln("-----------------------------------------------------------------------------------");

listaClientes.forEach((cliente) => {
    document.writeln(`<br>Nome: ${cliente.nome} | ${cliente.endereco} | ${cliente.endereco} <br><br>`);
})/

document.writeln("-----------------------------------------------------------------------------------");
document.writeln(`<br> Numero de clientes : ${listaClientes.length}`);