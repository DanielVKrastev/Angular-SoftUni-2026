import { Component, Input } from '@angular/core';
import { SimpleUser } from '../../types';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent {
  @Input('user') user: SimpleUser | null= null;

  constructor(private us: UserService) {
    console.log(this.user?.name + ' - ' + JSON.stringify(this.us.appUsers, null, 4));
    
  }
}
