import { ComoUsarService } from './../../como-usar.service';
import { ActivatedRoute } from '@angular/router';
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
    this.comoUsarService.getComoUsarOfertaPorId(this.route.parent.snapshot.params.id).then(descricao => this.descricao = descricao);
  }

}
