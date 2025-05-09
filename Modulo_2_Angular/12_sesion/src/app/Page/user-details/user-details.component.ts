import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FullNamePipe } from '../../Pipes/full-name.pipe';

@Component({
  selector: 'app-user-detail',
  imports: [CommonModule, FullNamePipe],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailComponent {
  @Input() user: any;
}
