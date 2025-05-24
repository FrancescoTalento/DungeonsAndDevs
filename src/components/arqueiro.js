import { Personagem } from "./personagem.js";


export class Arqueiro extends Personagem{
    destreza
    static tipo = "Arqueiro"
    constructor(nome,destreza) {
        super(nome)
        this.destreza = destreza
    }

    obterInsigna(){
        if(this.destreza >=5){
            return "Dominador de flechas"
        }else{
            super.obterInsigna()
        }
    }
}