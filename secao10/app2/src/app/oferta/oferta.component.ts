import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from '../shared/oferta.model';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})

export class OfertaComponent implements OnInit {

  public oferta: Oferta;
  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) {}

  ngOnInit(): void {
    //console.log('rota '  + this.route.snapshot.params.id); // metodo snapshot para obter valores passados de uma rota pra outra
    // this.route.params.subscribe((parametro: any) => {
    //   console.table(parametro);
    // });
    this.ofertasService.getOfertasPorId(this.route.snapshot.params.id).then( oferta => this.oferta = oferta);
  }

}
