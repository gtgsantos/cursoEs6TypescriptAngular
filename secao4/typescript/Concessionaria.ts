import { IConcessionaria } from './IConcessionaria';
import Carro from './Carro'


export class Concessionaria implements IConcessionaria {
    private endereco:string
    private listaDeCarros: Carro[]



    constructor(endereco:string, listaDeCarros: Carro[]) {
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerHorariosDeFuncionamento(): string {
        return 'segunda à sexta das 8:00 as 17:00 e sabado das 8:00 as 12:00'
    }

    public getListaDeCarros() : Carro[] { 
        return this.listaDeCarros 
    }

    public fornecerEndereco(): string {
        return this.endereco
    }

    
}