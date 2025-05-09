import { Component } from '@angular/core';
import { CardComponent } from '../../Components/card/card.component';

@Component({
  selector: 'app-card-padre',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './card-padre.component.html',
  styleUrl: './card-padre.component.css'
})
export class CardPadreComponent {

}
