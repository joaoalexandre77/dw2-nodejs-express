// 1 – Crie uma função simples que exiba no console seu nome, sua idade e sua cidade. (Não esqueça de invocar a função no final).

function showData(){
    return` João Alexandre | 20 | Jacupiranga`;
}

console.log(showData());

/* 2 – Crie uma função que receba dois números como parâmetro em seguida faça a divisão entre eles.
 O resultado deve ser exibido no console concatenado com uma string. (Ex: “O resultado da divisão foi...”).
 A função deve ser chamada ao final passando dois números como argumento.
 */

 function div(number1, number2) {
    return number1 / number2;
 }
 
 console.log(`O resultado da divisão é : ${div(10, 2)}`)

 /*
 3 – Crie uma função que receba três números e retorne a multiplicação entre esses números.
 O resultado deve ser exibido no console.
 */

function mult(n1, n2, n3) {
    return n1 * n2 * n3;
}

 console.log(mult(10, 10, 10));

 /*
4 – Crie uma função que receba uma idade como parâmetro. Se a idade for >= 18, a função deve retornar o valor
“Maior de idade”, se não deve retornar “Menor de idade”. O resultado deve ser exibido no console.
 */

function maiorIdade(value) {
    if( value >= 18 ) return "Maior de idade";
    return "Menor de idade";
}

console.log(maiorIdade(18));

/*
5 – Crie uma função anônima que receba duas notas como parâmetro. Se a média dessas notas for <=5, a função deve retornar o 
valor “Reprovado”, se não deve retornar o valor “Aprovado”.  O resultado deve ser exibido no console. Considere média = (nota1 + nota2) / 2.
*/

const apRep = (n1, n2) => {
    const media = (n1 + n2)/2;
    return media <= 5 ? "reprovado" : "aprovado";
}

console.log(apRep(10, 10));

/*
6 – Crie uma arrow function que receba um número como parâmetro e retorne o triplo desse número. O resultado deve ser exibido no console concatenado 
com uma string. (Ex: “O triplo do número é...”)
*/

const tripo = (n1) => n1 * 3;
console.log(`O triplo do numero é : ${tripo(10)}`);


// 7 – Crie uma arrow function que receba quatro números como parâmetro e retorne a soma entre esses números. O resultado deve ser impresso no console.

const soma = (n1, n2, n3, n4) => n1 + n2 + n3 + n4;
console.log(`A soma é : ${soma(10, 10, 10, 10)}`);