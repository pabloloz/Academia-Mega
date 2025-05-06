import { Routes } from '@angular/router';
import { ProductManagerComponent } from './Components/product-manager/product-manager.component';
import { TodoComponent } from './Components/todo/todo.component';
import { HomeComponent } from './Page/home/home.component';
import { ErrorComponent } from './Page/error/error.component';
import { ProductosInfoComponent } from './Page/productos-info/productos-info.component';
import { CardComponent } from './Components/card/card.component';
import { CardPadreComponent } from './Page/card-padre/card-padre.component';
import { ServiciosPageComponent } from './Page/servicios-page/servicios-page.component';
import { FormularioComponent } from './Page/formulario/formulario.component';

export const routes: Routes = [
    {
        path: '',
        component: FormularioComponent},
    {
        path: 'servicios',
        component: ServiciosPageComponent},
    {
        path: 'componentes',
        component: ProductosInfoComponent},
      {  
        path: 'home',
        component: HomeComponent
    },
    {  
        path: 'card-padre',
        component: CardPadreComponent
    },
        {
        path:'product-manager',
        component: ProductManagerComponent
    },
    {
        path:'todo',
        component: TodoComponent
    },
    {
        path:'**',
        component: ErrorComponent
    }
];
