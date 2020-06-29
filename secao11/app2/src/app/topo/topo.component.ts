import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { Oferta } from '../shared/oferta.model';
import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';


@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>;
  public ofertasList: Oferta[];
  private subjectPesquisa: Subject<string> = new Subject<string>();
  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((termoPesquisa: string) => {
          let retorno: Observable<Oferta[]> = of<Oferta[]>();
          if (termoPesquisa.trim().length > 0) {
            retorno = this.ofertasService.getOfertasPorDescricao(termoPesquisa);

          }
          return retorno;
        }), catchError((err: any) => {
          console.log('erro erro erro erro erro erro');
          return of<Oferta[]>();
        })
      );

    this.ofertas.subscribe((ofertas: Oferta[]) => this.ofertasList = ofertas);
  }


  public pesquisa(termoDaPesquisa: string): void {
    // this.ofertas = this.ofertasService.getOfertasPorDescricao(termoDaPesquisa);
    // this.ofertas.subscribe(
    //   (ofertas: Oferta[]) => console.log(ofertas),
    //   (erro: any) => console.log('erro: ' + erro),
    //   () => console.log('fluxo completo')
    // );
    this.subjectPesquisa.next(termoDaPesquisa);


  }



}
