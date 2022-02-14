
export default class Pessoa {
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    nome: string
    idade: number

}

let p1 = new Pessoa("Thiago", 34);


console.log(p1.nome)
console.log(p1.idade)