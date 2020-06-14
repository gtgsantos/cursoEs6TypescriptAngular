export abstract class GenericoDAO<T> implements InterfaceDAO<T> {
    abstract nomeTabela: string;
    inserir(object: T): boolean {
        console.log("deveria inserir ne...");
        return false;
    }
    atualizar(object: T): boolean {
        throw new Error("Method not implemented.");
    }
    remover(id: number): T {
        throw new Error("Method not implemented.");
    }
    get(id: number): T {
        throw new Error("Method not implemented.");
    }
    list(): [T] {
        throw new Error("Method not implemented.");
    }
}
