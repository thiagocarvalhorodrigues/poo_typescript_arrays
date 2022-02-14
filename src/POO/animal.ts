
export default class Animal {
    tipo: string;
    nome: string;
    idade: number;

    constructor(t: string, n: string, i: number) {
        this.tipo = t;
        this.nome = n;
        this.idade = i;
    }

    public comunicar(): void {
        console.log("Olá Sou da classe mãe")

    }
}
 
class Cachorro extends Animal {
    raca: string;

    constructor(t: string, n: string, i: number, r: string) {
        super(t, n, i);
        this.raca = r;

    }
    public comunicar() {
        console.log("Olá, sou da classe Filha Cachorro;")
    }
}

class Gente extends Animal {
    cor: string;

    constructor(t: string, n: string, i: number, c: string) {
        super(t, n, i,);
        this.cor = c;
    }
    public comunicar(): void {
        console.log("Olá Sou da classe Gente")

    }
}

let c1 = new Cachorro("cachorro", "Bia", 10, "golden");
c1.comunicar()



let g1 = new Gente("Humano", "Cida", 45, "negra");
g1.comunicar()




