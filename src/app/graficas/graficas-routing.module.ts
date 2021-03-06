import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarrasComponent } from './pages/barras/barras.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';
import { DonaComponent } from './pages/dona/dona.component';
import { GraficasDobleComponent } from './pages/graficas-doble/graficas-doble.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'barras',
        component:BarrasComponent
      },
      {
        path:'graficas-doble',
        component:GraficasDobleComponent
      },
      {
        path:'dona',
        component:DonaComponent
      },
      {
        path:'dona-http',
        component:DonaHttpComponent
      },
      {
        path:'**',
        redirectTo:'barras'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }
