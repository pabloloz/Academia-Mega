import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Saludo } from './Components/saludo.components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Saludo],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  titulo = "Bienvenidos a mi página web"
  name = "Pablo";
  dato = "Programador"
  dato2 = 140
}
