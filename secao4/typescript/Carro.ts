import Veiculo from './Veiculo'

export default class Carro extends Veiculo { // coloquei como default so pra testar mesmo
   
    private numeroDePortas: number

    constructor(modelo: string, numeroDePortas: number) {
        super(modelo)
        this.numeroDePortas = numeroDePortas
    }    
}