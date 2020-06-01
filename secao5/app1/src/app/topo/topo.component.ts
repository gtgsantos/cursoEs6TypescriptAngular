import { Component } from '@angular/core';


@Component({
    selector: 'app-topo',
    templateUrl: './topo.component.html', // aqui é um template via url
    // template: `<p>
    //               este eh o template inline
    //            </p>` // aqui é um template inline
    styleUrls: ['./topo.component.css']

})


export class TopoComponent {

    public titulo: string = 'Aprendendo inglês'
}
