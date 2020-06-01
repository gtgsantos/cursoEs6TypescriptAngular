import Veiculo from './Veiculo'

export default class Moto
 extends Veiculo { // coloquei como default so pra testar mesmo
   
    private numeroDePortas: number

    constructor(modelo: string, numeroDePortas: number) {
        super(modelo)
        this.numeroDePortas = numeroDePortas
    }    


    public acelerar() : void { // esse metodo eh um override
        this.velocidade = this.velocidade + 30
    }
}