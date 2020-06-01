import { Component, OnInit } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from '../painel/mock/frases-mock';


@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao = 'Traduza a frase';
  public resposta: string;

  public rodada = 0;
  public rodadaFrase: Frase;


  constructor() {
    this.defineFrase();
   }

  ngOnInit(): void {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (resposta.target as HTMLInputElement).value;
    console.log(this.resposta);
  }


  public verificarResposta(): void {

    if (this.resposta === this.rodadaFrase.frasePtBr) {
      this.rodada++;
      this.defineFrase();
    } else {

    }
    console.log('Verificar resposta: ', this.resposta, ' ', this.rodadaFrase.frasePtBr, ' ', this.rodada);
  }


  private defineFrase() {
    this.rodadaFrase = this.frases[this.rodada];
  }
}
