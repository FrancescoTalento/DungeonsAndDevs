export class Personagem{
    #level
    mana = 100
    vida = 100
    descricao 
    tipo
    constructor(nome) {
        this.nome = nome
        this.#level = 1
    }
    aumentarLevel(){
        this.level+=1
    }
    diminuirLevel(){
        this.level-=1
    }

    get level(){
        return this.#level
    }
    set level(newValue){
        if(newValue >= 1 && newValue <= 10)
        this.#level = newValue
    }
    
    
    obterInsigna(){
        if(this.level >= 5){
            return `O implacavel ${this.constructor.tipo}}`
        }else{
            return `${this.constructor.tipo} iniciante`
        }
    }


    static verificarVencedor(personagem1,personagem2){
        if(personagem1.level === personagem2.level){
            return `EMPATE !!!`
        }else if (personagem1.level > personagem2.level){
            return `${personagem1.constructor.tipo} ${personagem1.nome} eh o vencedor`
        }else{
            return `${personagem2.constructor.tipo} ${personagem2.nome} eh o vencedor`
        }
    }
}