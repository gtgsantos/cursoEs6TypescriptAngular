import { Pedido } from './../shared/pedido.model';
import { OrdemCompraService } from './../ordem-compra.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})

export class OrdemCompraComponent implements OnInit {

  public idPedidoCompra: number;

  public endereco: string = '';
  public numero: string = '';
  public complemento: string = '';
  public formaPagamento: string = '';

  // controles de validação dos campos
  public enderecoValido: boolean;
  public numeroValido: boolean;
  public complementoValido: boolean;
  public formaPagamentoValido: boolean;


  // estado primitivo dos campos (pristine)
  public enderecoEstadoPrimitivo: boolean = true;
  public numeroEstadoPrimitivo: boolean = true;
  public complementoEstadoPrimitivo: boolean = true;
  public formaPagamentoEstadoPrimitivo: boolean = true;

  //controlar botao confirmar compra
  public formEstado: string = 'disabled';

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit(): void { }

  public confirmarCompra(): void {
    this.ordemCompraService.efetivarcompra(
      new Pedido(this.endereco, this.numero, this.complemento, this.formaPagamento))
      .subscribe((idPedido: number) => {
        this.idPedidoCompra = idPedido;
      });
  }

  public atualizarFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento;

    this.formaPagamentoEstadoPrimitivo = false;

    if (this.formaPagamento === 'debito'
      || this.formaPagamento === 'dinheiro') {
      this.formaPagamentoValido = true;
    } else {
      this.formaPagamentoValido = false;
    }

    this.habilitaForm();
  }

  public atualizarComplemento(complemento: string): void {
    this.complemento = complemento;

    this.complementoEstadoPrimitivo = false;

    if (this.complemento.length > 0) {
      this.complementoValido = true;
    }

    this.habilitaForm();
  }

  public atualizarNumero(numero: string): void {
    this.numero = numero;

    this.numeroEstadoPrimitivo = false;

    if (this.numero.length > 0) {
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }

    this.habilitaForm();
  }

  public atualizarEndereco(endereco: string): void {
    this.endereco = endereco;

    this.enderecoEstadoPrimitivo = false;

    if (this.endereco.length > 3) {
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }

    this.habilitaForm();
  }

  public habilitaForm(): void {
    if (this.enderecoValido === true
      && this.numeroValido === true
      && this.complementoValido === true
      && this.formaPagamentoValido === true) {
      this.formEstado = '';
    } else {
      this.formEstado = 'disabled';
    }
  }
}
