import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  standalone: true,
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {
  @Input() info = {
    nombre: '',
    edad: 0,
    profesion: ''
  }
  @Output() mensaje = new EventEmitter();

  enviarmensaje(){
    this.mensaje.emit(this.info.nombre);
  }
}

