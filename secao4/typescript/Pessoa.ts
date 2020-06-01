import Carro from './Carro'

export class Pessoa {
    private nome: string
    private carroPreferido: Carro
    private carro: Carro


    constructor(nome: string, carro: Carro) {
        this.nome = nome    
        this.carro = carro
        this.carroPreferido = carro
    
    }

    public setCarroPreferido(carro: Carro) {
        this.carroPreferido = carro
    }


    public getCarroPreferido() : Carro {
        return this.carroPreferido
    }

    public getCarro() : Carro {
        return this.carro
    }


}