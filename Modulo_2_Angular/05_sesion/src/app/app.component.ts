import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { SaludoComponent } from './components/saludo/saludo.component';
//import { CardComponent } from './components/card/card.component';
//import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './Components/todo/todo.component'
import { ProductManagerComponent } from './Components/product-manager/product-manager.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    TodoComponent,
    ProductManagerComponent
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

