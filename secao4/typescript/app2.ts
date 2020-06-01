import  Carro  from './Carro'
import { Concessionaria } from './Concessionaria'
import { Pessoa } from './Pessoa'

let carroA = new Carro("opala", 4)
let carroB = new Carro("chevette", 2)

let listaCarros = [carroA]

let concessionaria  = new Concessionaria("Imbiribeira", [carroA,carroB])

let cliente = new Pessoa("Joao", carroA)


concessionaria.getListaDeCarros().map((carro: Carro) => {
    if (carro['modelo'] == cliente.getCarroPreferido()['modelo']) {
        console.log('tem o carro ')
    }
})

//console.log(carroA)
console.log(concessionaria.fornecerHorariosDeFuncionamento())
