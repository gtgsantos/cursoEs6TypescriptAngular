export class Coracao {
    constructor(
        public cheio: boolean,
        public urlCoracaoVazio  = '../../../assets/coracao_vazio.png',
        public urlCoracaoCheio = '../../../assets/coracao_cheio.png')  {}

    public exibeCoracao(): string {
        let retorno : string;
        if (this.cheio) {
            retorno = this.urlCoracaoCheio;
        } else {
            retorno = this.urlCoracaoVazio;
        }
        return retorno;
    }
}
