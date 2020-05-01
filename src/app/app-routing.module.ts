import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent} from './componentes/principal/principal.component';
import { TablaProfesorComponent } from './componentes/tabla-profesor/tabla-profesor.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';


const routes: Routes = [{path: '' ,component: PrincipalComponent},
{path: 'tabla' ,component: TablaProfesorComponent},
{path: 'busqueda' ,component: BusquedaComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
