import { Component } from '@angular/core';
import { User } from './user';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'frontend';

  users: User[] = [];
  name: string = '';

  constructor(private userService: UsersService) {}

  async ngOnInit(): Promise<void> {}

  async updateUsers() {
    this.users = await this.userService.getUsers(this.name);
  }
}
