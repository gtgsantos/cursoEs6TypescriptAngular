import { ConcessionariaDAO } from './ConcessionariaDAO';
import { Concessionaria } from './Concessionaria';

let dao: ConcessionariaDAO = new ConcessionariaDAO();


let concessionaria: Concessionaria = new Concessionaria("rua da aurora", []);


dao.inserir(concessionaria)