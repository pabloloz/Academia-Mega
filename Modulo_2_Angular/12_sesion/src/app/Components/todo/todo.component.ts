import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  nuevaTarea = "";

  tareas = [
    { texto: "Aprender Angular", completada: false },
    { texto: "Hacer Ejercicio", completada: true }
  ];

  agregarTareas() {
    if (this.nuevaTarea.trim()) {
      this.tareas.push({ texto: this.nuevaTarea, completada: false });
      this.nuevaTarea = "";
    }
  }

  limpiarTareas() {
    this.tareas = [];
  }

  toggleCompletar(index: number) {
    this.tareas[index].completada = !this.tareas[index].completada;
  }
}
