import { Component } from "@angular/core";

@Component({
    selector: "app-saludo",
    imports: [],
    template: `<h3>Hola, me llamo {{name}}</h3>`,
    styles: `h3{
        background-color: blue;
      }`,
  })
  
  export class Saludo {
    name = "Ulises Omar Mora"
  }
  