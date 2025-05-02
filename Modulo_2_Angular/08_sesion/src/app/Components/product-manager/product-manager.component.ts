import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-manager',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})

export class ProductManagerComponent {
  categoriaSeleccionada = "";

  productos = {
    electronica: [
      { nombre: "Laptop Gamer ASUS ROG", precio: 24500, disponible: true, descuento: 15 },
      { nombre: "Smartphone Galaxy S24 Ultra", precio: 18999, disponible: false, descuento: 0 },
      { nombre: "Audífonos Inalámbricos JBL", precio: 1299, disponible: true, descuento: 20 },
      { nombre: "Pantalla 4K Samsung 55\"", precio: 11499, disponible: true, descuento: 10 },
    ],
    ropa: [
      { nombre: "Camisa de Lino Azul Marino", precio: 699, disponible: true, descuento: 5 },
      { nombre: "Jeans Slim Fit", precio: 899, disponible: true, descuento: 0 },
      { nombre: "Sudadera Nike DryFit", precio: 1249, disponible: false, descuento: 25 },
      { nombre: "Chamarra de Mezclilla", precio: 1399, disponible: true, descuento: 15 },
    ],
    alimentos: [
      { nombre: "Carne de Res Angus (1kg)", precio: 189, disponible: true, descuento: 0 },
      { nombre: "Verduras Orgánicas (500g)", precio: 59, disponible: true, descuento: 10 },
      { nombre: "Queso Artesanal Oaxaca (300g)", precio: 79, disponible: false, descuento: 0 },
      { nombre: "Pan Integral Hecho en Casa", precio: 45, disponible: true, descuento: 5 },
    ],
  };
}


