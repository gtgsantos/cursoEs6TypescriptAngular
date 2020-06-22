import { AbstractDisplayComponent } from '../shared/abstract.display.component';
import { Component } from '@angular/core';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-restaurante',
  templateUrl: '../shared/abstract.display.component.html',
  styleUrls: ['../shared/abstract.display.component.css'],
  providers: [ OfertasService ]
})


export class RestaurantesComponent extends AbstractDisplayComponent {
  public categoria = 'restaurante';
  public titulo = 'Rodízios, Buffet, Carnes Especiais, Feijoada e mais!';
  public subtitulo = 'Conheça as melhores ofertas de restaurantes:';
}
