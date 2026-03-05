class Carro {
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    buzinar(){
        return "Beep! Beep";
    }
}

const carroPopular = new Carro("Fiat", "Toro", "2026");

document.writeln(`<p>O carro ${carroPopular.marca} modelo ${carroPopular.modelo} é do ano ${carroPopular.ano} e quando buzina faz ${carroPopular.buzinar()}</p>`);