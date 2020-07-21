import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { URL_API_PEDIDOS } from './shared/app.api';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Pedido } from './shared/pedido.model';

@Injectable()
export class OrdemCompraService {

    constructor(private http: Http) { }


    public efetivarcompra(pedido: Pedido): Observable<any> {
        let headers = new Headers();
        headers.append('Content-type', 'application/json');


        return this.http.post(URL_API_PEDIDOS,
            JSON.stringify(pedido),
            new RequestOptions({ headers })).pipe(map((resposta: Response) => resposta.json().id));
    }

}
