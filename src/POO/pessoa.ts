
export default class Pessoa {
    public nome: string
    public idade: number
    public tamanho: number
    public cor: string
    public genio: string

    constructor(nome: string, idade: number, tamanho:number, cor: string, genio: string ) {
        this.nome= nome;
        this.idade = idade;
        this.tamanho = tamanho;
        this.cor = cor;
        this.genio = genio;

    }

    public dormir(): void {
        console.log(`Olá me chamo ${this.nome} e sou classe Pessoa, e irei DORMIR.`)
    }
}

// let p1 = new Pessoa("Thiago", 35);

// console.log(p1.nome)
// console.log(p1.idade)
