import { Component, OnInit, EventEmitter, Output} from '@angular/core';

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
  public resposta = '';
  public rodada = 0;
  public rodadaFrase: Frase;
  public progresso = 0;
  public tentativas = 3;
  @Output() public encerrarJogoEvent: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.defineFrase();
  }

  ngOnInit(): void {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (resposta.target as HTMLInputElement).value;
  }

  public verificarResposta(): void {

    if (this.resposta === this.rodadaFrase.frasePtBr) {
      this.verificarRespostaSeRespostaIgualFrase();
    } else {
      this.verificarRespostaSeRespostaDiferenteFrase();
    }
  }

  private verificarRespostaSeRespostaDiferenteFrase() {
    this.tentativas--;
    if (this.tentativas === -1) {
      this.destruirPainelSucessoErro('derrota');
    }
  }

  private verificarRespostaSeRespostaIgualFrase() {
    this.rodada++;
    this.progresso = this.progresso + (100 / this.frases.length);
    if (this.rodada === this.frases.length) {
      this.destruirPainelSucessoErro('vitoria');
    }
    else {
      this.defineFrase();
    }
    this.resposta = '';
  }

  private destruirPainelSucessoErro(evento: string) {
    this.encerrarJogoEvent.emit(evento);
  }

  private defineFrase() {
    this.rodadaFrase = this.frases[this.rodada];
  }
}
