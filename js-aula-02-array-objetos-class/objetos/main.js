document.writeln(`<h4>Objetos literais possuem atributos e métodos</h4>`);
const pessoa = {};
document.writeln(typeof pessoa);

const carro = {
    modelo : "gol",
    cor: "Vermelho",

    acelerar() {
        return "Acelerando...";
    },
    frear() {
        return "Freando...";
    }
};

document.writeln(`<p>O modelo do carro: ${carro.modelo}</p>`);
document.writeln(`<p>A cor do carro: ${carro.cor}</p>`);
document.writeln(`<p>Quando o carro acelera ele faz: ${carro.acelerar()}</p>`);
document.writeln(`<p>Quando o carro freia ele faz: ${carro.frear()}</p>`);

//Manipulando arrays de objetos
const productList = [{
    nome : "Computador",
    marca : "Lenvo",
    preco : 2000,
    descricao : "PC moderno"
    }, 
    {
    nome : "Tablet",
    marca : "Samsung",
    preco : 3000,
    descricao : "Tablet moderno"        
    }, 
    {
    nome : "Celular",
    marca : "Xiaomi",
    preco : 10000,
    descricao : "Celular moderno"
    }
];

productList.forEach((produto) => {
    document.writeln(`${produto.nome} <br>
        ${produto.marca} <br>
        ${produto.preco} <br>
        ${produto.descricao} <br><br>`);
})