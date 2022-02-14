class Carro {
    private cor: string;
    private ano: number;
    private valor: number;

    constructor(c: string, a: number, v: number) {
        this.cor = c;
        this.ano = a;
        this.valor = v;
    }

    public getValor() {
        return this.valor
    }

    public setValor(valor: number) {
        this.valor = valor;
    }

    public getCor() {
        return this.cor
    }

    public setCor(cor: string) {
        this.cor = cor;
    }

    public getAno() {
        return this.ano
    }

    public setAno(ano: number) {
        this.ano = ano;
    }

}

let c = new Carro("preto", 2022, 60000);

c.setValor(100000)
console.log(c.getValor());
