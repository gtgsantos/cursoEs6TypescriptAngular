import { GenericoDAO } from "./GenericoDAO";
import { Pessoa } from "./Pessoa";

export class PessoaDAO extends GenericoDAO<Pessoa> {

    nomeTabela: string = "PES_PESSOA"


}