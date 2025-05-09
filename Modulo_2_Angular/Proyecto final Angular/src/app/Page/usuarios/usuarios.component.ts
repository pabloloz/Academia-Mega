import { Component } from '@angular/core';
import { UserListComponent } from '../../Components/user-list/user-list.component';
import { UserDetailComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-usuarios',
  imports: [UserListComponent,UserDetailComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})

export class UsuariosComponent {
  user: any = null;
}
