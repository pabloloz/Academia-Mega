import { Component } from '@angular/core';
import { RouterModule, RouterLink, RouterOutlet } from '@angular/router'; // <-- Importa RouterModule también
import { CommonModule } from '@angular/common';
import { TodoComponent } from './Components/todo/todo.component';
import { ProductManagerComponent } from './Components/product-manager/product-manager.component';
import { HomeComponent } from './Page/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule, // <-- AGRÉGALO AQUÍ
    RouterOutlet,
     RouterLink
    // HomeComponent,
    // TodoComponent,
    // ProductManagerComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  rolUsuario = "user";
  edad = 3;

  tareaImportante = true;

  IsUrgente = false;
}
