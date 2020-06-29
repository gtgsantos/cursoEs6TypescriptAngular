import { ActivatedRoute } from '@angular/router';
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
    console.log('aaaa: ' + this.route.parent.snapshot.params.id);
    console.log('bbbb: ' + this.route.snapshot.params.id);
    this.ondeFicaService.getOndeFicaPorId(this.route.parent.snapshot.params.id).then(
      descricao => this.descricao = descricao);
  }
}
