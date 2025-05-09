import { Component, EventEmitter, Output } from '@angular/core';
import { UserService } from '../../Service/user.service';
import { CommonModule } from '@angular/common';
import { FullNamePipe } from '../../Pipes/full-name.pipe';

@Component({
  selector: 'app-user-list',
  imports: [CommonModule, FullNamePipe],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users: any[] = [];

  @Output() selectedUser = new EventEmitter();

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().subscribe(res => this.users = res.results);
    console.log(this.users);
  }

  onSelect(user: any) {
    this.selectedUser.emit(user);
  }  
}
