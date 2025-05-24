import { Personagem } from "./components/personagem.js"
import { PersonagemViem } from "./components/personagem-view.js"
import { Arqueiro } from "./components/arqueiro.js"
import { Mago } from "./components/mago.js"
import { ArqueiroMago } from "./components/arqueiro-mago.js"
import { Guerreiro } from "./components/guerreiro.js"


const mago = new Mago("Mauricio","FOGAO",10,10,)
const arqueiro1 =  new Arqueiro("Antonio",10)
const arqueiroMago = new ArqueiroMago("Fran",8,"Materia Escura",100,30)
const guerreiraJorge = new Guerreiro('Jorge', 8)



const personagens  = [mago,arqueiro1,arqueiroMago,guerreiraJorge]

console.log(Personagem.verificarVencedor(mago,arqueiroMago));
new PersonagemViem(personagens).render()

