import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { SaludoComponent } from './components/saludo/saludo.component';
//import { CardComponent } from './components/card/card.component';
//import { TarjetaComponent } from './components/tarjeta/tarjeta.component';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './Components/todo/todo.component'

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    TodoComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isVisible = true;

  frutas = [
    "Manzana",
    "Naranja",
    "Uva",
    "Piña",
    "Plátano"
  ];
}

