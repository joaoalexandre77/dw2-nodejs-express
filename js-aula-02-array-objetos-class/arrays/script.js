let produtos = ["Computador", "Notebook", "Celular", "Tablet"];
document.writeln(`<p>${produtos}</p>`);

document.writeln(`<p>Exibindo os elementos do vetor atraves do indice:</p>`)
document.writeln(`<p>${produtos[0]}</p>`);
document.writeln(`<p>${produtos[1]}</p>`);
document.writeln(`<p>${produtos[2]}</p>`);
document.writeln(`<p>${produtos[3]}</p>`);

produtos.forEach((produto) => {
    document.writeln(`<p>${produto}</p>`)
});

produtos.forEach((produto, i) => {
    document.writeln(`<p>${i} - ${produto}</p>`)
});

let frutas = ['laranja', 'maçã', 'banana'];
document.writeln(`<h4> Método PUSH - Insere um novo elemento no final do vetor. </h4>`);
frutas.push("abacaxi");
document.writeln(`<p>${frutas}</p>`);

document.writeln(`<h4> Método unShift - Insere um novo elemento no inicio do vetor. </h4>`);
frutas.unshift("Amora");
document.writeln(`<p>${frutas}</p>`);

document.writeln(frutas.length);