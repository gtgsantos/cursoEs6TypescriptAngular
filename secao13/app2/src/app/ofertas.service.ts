import { URL_API_OFERTAS } from './shared/app.api';
import { Oferta } from './shared/oferta.model';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';

@Injectable()
export class OfertasService {

    constructor(private http: Http) { }

    public getOfertas(): Promise<Oferta[]> {
        return this.http.get(`${URL_API_OFERTAS}?destaque=true`)
            .toPromise()
            .then((resposta: Response) => resposta.json());
        //this.http.get('http://localhost:3000/ofertas');  TODO ver depois como isso é implementado
    }

    public getOfertasPorDescricao(descricao: string): Observable<Oferta[]> {
        return this.http.get(`${URL_API_OFERTAS}?descricao_oferta_like=${descricao}`).pipe(
            retry(10), map((x: Response) => x.json()));

    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get(`${URL_API_OFERTAS}?categoria=${categoria}`)
            .toPromise()
            .then((resposta: Response) => resposta.json());
        //this.http.get('http://localhost:3000/ofertas');  TODO ver depois como isso é implementado
    }


    public getOfertasPorId(id: string): Promise<Oferta> {
        return this.http.get(`${URL_API_OFERTAS}?id=${id}`)
            .toPromise()
            .then((resposta: Response) => resposta.json().shift());
    }



}