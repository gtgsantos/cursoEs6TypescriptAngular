
import { OfertasService } from './../ofertas.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from '../shared/oferta.model';
// import { Observable, Subscription, Observer, interval } from 'rxjs';
//import 'rxjs/Rx';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})

export class OfertaComponent implements OnInit, OnDestroy {

  // private tempoObservableSubscription: Subscription;
  // private meuObservableTesteSubscription: Subscription;

  public oferta: Oferta;
  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) { }

  ngOnDestroy(): void {
    // this.tempoObservableSubscription.unsubscribe();
    // this.meuObservableTesteSubscription.unsubscribe();
  }

  ngOnInit(): void {
    //console.log('rota '  + this.route.snapshot.params.id); // metodo snapshot para obter valores passados de uma rota pra outra
    // this.route.params.subscribe((parametro: any) => {
    //   console.log(parametro);
    // });
    this.ofertasService.getOfertasPorId(this.route.snapshot.params.id).then(oferta => this.oferta = oferta);

    //exemplo de teste
    //   this.route.params.subscribe((parametro: any) => {
    //     console.log('subscribe ' + parametro);
    //   }, (erro: any) => {
    //     console.log('erro ' + erro);
    //   }, () => console.log('processamento concluido'));
    // }

    // const tempo = interval(500);

    // this.tempoObservableSubscription = tempo.subscribe(x => {
    //   console.log('fiderapariga ' + x);
    // });


    // //observavel
    // const observador1 = new Observable((observer: Observer<string>) => {
    //   observer.next('primeiro evento da stream');
    //   observer.complete();
    //   observer.error('deu pau');
    // });

    // //observador
    // this.meuObservableTesteSubscription = observador1.subscribe((resultado: any) => console.log(resultado),
    //   (erro: string) => console.log('deuerro: ' + erro),
    //   () => console.log('completado com sucesso!'));


  }
}
