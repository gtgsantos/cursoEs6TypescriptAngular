import { Concessionaria } from "./Concessionaria";
import { GenericoDAO } from "./GenericoDAO";

export class ConcessionariaDAO extends GenericoDAO<Concessionaria> {

    nomeTabela: string = "CON_CONCESSIONARIA"

}