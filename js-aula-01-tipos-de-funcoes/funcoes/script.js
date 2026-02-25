// TIPOS DE FUNCOES 
//FUNCAO SIMPLES
function showMessage() {
    const message = "<h2>Olá, bem vindo </h2>";
    document.writeln(message);
}

showMessage();

//Funcao com parametro/args
const user = "João Alexandre";

function showUserMessage(value){
    const userMessage = `<h2>${value} </h2>`;
    document.writeln(userMessage);
}

showUserMessage(user);

//Funcao com mais de um parametro
const n1 = 10;
const n2 = 20;

function sum(number1, number2){
    const result = n1 + n2;
    document.writeln(`O resultado da soma entre ${number1} + ${number2} = ${result}`);
}

sum(n1, n2);


function mult(number1, number2) {return number1 * number2;}
document.writeln(`O valor da multiplicação é de : ${mult(n1, n2)}`);

// Funcao com retorno condicional
const number = 5 ;

function parImpar(number){
    if(number % 2 === 0 ) return "Par";
    return "impar";
}

document.writeln(`o numero ${number} é : ${parImpar(number)}`);

//Funcao anonima

const div = function(n1, n2) {return n1 / n2;}

document.writeln(`A divisão entre ${n1} e ${n2} é : ${div(n1, n2)}`);

//Arrow function

const dob = (n1) => n1 * 2;

document.writeln(`O dobro de ${n1} é : ${dob(n1)}`);

//Arrow function com mais de um parametro

const calculator = (n1, operator, n2) => {
    return eval(`${n1} ${operator} ${n2}`);
};

document.writeln(`Calculadora: ${calculator(10, "/", 10)}`);
