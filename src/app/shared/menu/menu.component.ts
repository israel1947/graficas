import { Component} from '@angular/core';
import { MenuItems } from '../../interfaces/menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [`
    
    li{
      cursor:pointer;
    }
  `
  ]
})
export class MenuComponent {

  menu:MenuItems[]=[
    {
      rutas:'/graficas/barras',
      texto:'Barras'
    },
    {
      rutas:'/graficas/graficas-doble',
      texto:'Barras Dobles'
    },
    {
      rutas:'/graficas/dona',
      texto:'Dona'
    },
    {
      rutas:'/graficas/dona-http',
      texto:'Dona Http'
    },
  ];
}
