import { Oferta } from './../shared/oferta.model';
import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';

export abstract class AbstractDisplayComponent implements OnInit {

  public ofertas: Oferta[];
  abstract categoria: string;
  abstract titulo: string;
  abstract subtitulo: string;

  constructor(public ofertasService: OfertasService) {}

  ngOnInit() {
    this.buscarOfertasPorCategoria();
  }

  private buscarOfertasPorCategoria(): void {
    this.ofertasService.getOfertasPorCategoria(this.categoria)
      .then((ofertas: Oferta[]) => {
        console.log('a função resolve() foi resolvida depois de 3 segundos');
        this.ofertas = ofertas;

      })
          .catch((param: any) => console.table(param));
  }


}
