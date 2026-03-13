import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';
import { UserItemComponent } from './user-item/user-item.component';
import { SimpleUser } from '../types';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserItemComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush, // (OnPush)->lock component (Defaul)->unlock
})
export class UserListComponent {
  @Input('users') usersList: SimpleUser[] = [];
  
  constructor(private cd: ChangeDetectorRef) {}

  refreshList(){
    this.cd.detectChanges();
  }
}
