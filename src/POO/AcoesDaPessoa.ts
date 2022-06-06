import Humano from '../Interface/Humano';
import Pessoa from './pessoa';


class AcoesDaPessoa extends Pessoa implements Humano {
    public emprego: string

    constructor(nome: string, idade: number, tamanho: number, cor: string, genio: string, emprego: string) {
        super(nome, idade, tamanho, cor, genio);
        this.emprego = emprego;

    }
    public programar(): void {
        console.log(`Olá me chamo ${this.nome} e sou classe AcoesDaPessoa, e estou PROGRAMANDO. `)

    }

}

let Candidato1 = new AcoesDaPessoa("carlos", 35, 1.70, "Branca", "Gente boa", "Desenvolvedor de Software.")
console.log(Candidato1),
Candidato1.programar()
Candidato1.dormir()