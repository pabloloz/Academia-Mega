import { Routes } from '@angular/router';
import { ProductManagerComponent } from './Components/product-manager/product-manager.component';
import { TodoComponent } from './Components/todo/todo.component';
import { HomeComponent } from './Page/home/home.component';
import { ErrorComponent } from './Page/error/error.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
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
