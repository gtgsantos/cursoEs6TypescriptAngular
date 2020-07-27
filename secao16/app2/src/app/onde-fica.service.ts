import { URL_API_ONDE_FICA, URL_API_COMO_USAR } from './shared/app.api';
import { Enum } from './shared/enum.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OndeFicaService {

    constructor(private http: Http) {}

    public getOndeFica(): Promise<Enum[]> {
        return this.http.get(`${URL_API_ONDE_FICA}`)
            .toPromise()
            .then((resposta: any) => resposta.json());
    }

    public getOndeFicaPorId(id: string): Promise<string> {
        return this.http.get(`${URL_API_ONDE_FICA}?id=${id}`)
            .toPromise()
            .then((resposta: any) => resposta.json()[0].descricao);
    }

}
