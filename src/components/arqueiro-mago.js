import { Personagem } from "./personagem.js";
import { Arqueiro } from "./arqueiro.js";
import { Mago } from "./mago.js";

export class ArqueiroMago extends Personagem{
    ladoArqueiro
    ladoMago
    static tipo = "ArqueiroMago"

    constructor(nome,destreza, elementoMagico,levelMagico,inteligencia) {
        super(nome)
        this.ladoArqueiro = new Arqueiro(nome,destreza)
        this.ladoMago = new Mago(nome,elementoMagico,levelMagico,inteligencia)
    }

    obterInsigna(){
        return `${this.ladoArqueiro.obterInsigna()} e ${this.ladoMago.obterInsigna()}`
    }
}