import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { OfertaComponent } from './oferta/oferta.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'restaurantes', component: RestaurantesComponent},
    { path: 'diversao', component: DiversaoComponent},
    { path: 'oferta', component: HomeComponent},
    { path: 'oferta/:id', component: OfertaComponent,
        children: [
                    {path: '', component: HomeComponent},
                    {path: 'como-utilizar', component: ComoUsarComponent},
                    {path: 'onde-fica', component: OndeFicaComponent}
        ]
    }
];
