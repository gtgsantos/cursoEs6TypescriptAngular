import { URL_API_COMO_USAR } from './shared/app.api';
import { Enum } from './shared/enum.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ComoUsarService {

    constructor(private http: Http) {}

    public getComoUsar(): Promise<Enum[]> {
        return this.http.get(`${URL_API_COMO_USAR}`)
            .toPromise()
            .then((resposta: any) => resposta.json());
    }

    public getComoUsarOfertaPorId(id: string): Promise<string> {
        return this.http.get(`${URL_API_COMO_USAR}?id=${id}`)
            .toPromise()
            .then((resposta: any) => resposta.json()[0].descricao);
    }
}