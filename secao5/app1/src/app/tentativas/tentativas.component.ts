import { Coracao } from './../shared/coracao.model';
import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})

export class TentativasComponent implements OnInit, OnChanges {

  @Input() public tentativas: number;

  public coracoes = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ];

  constructor() {}

  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    if (this.tentativas !== this.coracoes.length) {
      const indice = this.coracoes.length - this.tentativas;
      for (let i = 0; i < indice;  i++) {
        this.coracoes[i].cheio = false;
      }

    }
  }

  ngOnInit(): void {
  }

}
