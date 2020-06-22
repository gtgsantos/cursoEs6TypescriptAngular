import { URL_API } from './shared/app.api';
import { Oferta } from './shared/oferta.model';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OfertasService {

    constructor(private http: Http) {}

    public getOfertas(): Promise<Oferta[]> {
        return this.http.get(`${URL_API}?destaque=true`)
            .toPromise()
            .then((resposta: any) => resposta.json());
        //this.http.get('http://localhost:3000/ofertas');  TODO ver depois como isso é implementado
    }


    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get(`${URL_API}?categoria=${categoria}`)
            .toPromise()
            .then((resposta: any) => resposta.json());
        //this.http.get('http://localhost:3000/ofertas');  TODO ver depois como isso é implementado
    }


    public getOfertasPorId(id: string): Promise<Oferta> {
        return this.http.get(`${URL_API}?id=${id}`)
            .toPromise()
            .then((resposta: any) => resposta.json().shift());
    }
}