import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OndeFicaService } from 'src/app/onde-fica.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OndeFicaService]
})
export class OndeFicaComponent implements OnInit {

  public descricao: string;

  constructor(private route: ActivatedRoute, private ondeFicaService: OndeFicaService) { }

  ngOnInit(): void {


    this.route.parent.params.subscribe((parametros: Params) => {
      this.ondeFicaService.getOndeFicaPorId(parametros.id).then(
        descricao => this.descricao = descricao);
      
    });

    
  }
}
