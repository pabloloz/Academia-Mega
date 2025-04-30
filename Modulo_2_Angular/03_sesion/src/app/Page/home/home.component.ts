import { Component } from '@angular/core';
import { HijoComponent } from '../../Components/hijo/hijo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [HijoComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  usuarios = [
    { nombre: "Juan", edad: 25, profesion: " Ingeniero" },
    { nombre: "Ana", edad: 29, profesion: " Diseñadora" },
    { nombre: "Luis", edad: 22, profesion: " Estudiante" },
    { nombre: "Pablo", edad: 22, profesion: " Ingeniero" },
    { nombre: "Carlos", edad: 28, profesion: "Maestro" },
  ];  

  mensajeHijo = "";

  recibirMensaje(mensaje : string){
    this.mensajeHijo = mensaje
  }
}
