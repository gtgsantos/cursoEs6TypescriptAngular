import { ComoUsarService } from './../../como-usar.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [ComoUsarService]
})
export class ComoUsarComponent implements OnInit {

  public descricao: string;

  constructor(private route: ActivatedRoute, private comoUsarService: ComoUsarService) { }

  ngOnInit(): void {
    this.route.parent.params.subscribe((parametros: Params) => {
      this.comoUsarService.getComoUsarOfertaPorId(parametros.id).then(descricao => this.descricao = descricao);
    });
  }

}
