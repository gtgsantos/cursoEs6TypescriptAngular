import { AbstractDisplayComponent } from '../shared/abstract.display.component';
import { Component } from '@angular/core';
import { OfertasService } from '../ofertas.service';


@Component({
  selector: 'app-diversao',
  templateUrl: '../shared/abstract.display.component.html',
  styleUrls: ['../shared/abstract.display.component.css'],
  providers: [ OfertasService ]
})
export class DiversaoComponent extends AbstractDisplayComponent {
  public categoria = 'diversao';
  public titulo = 'Cinema, viagens, diversão muito e mais!';
  public subtitulo = 'Conheça as melhores ofertas para você se divertir quando quiser:';
}
