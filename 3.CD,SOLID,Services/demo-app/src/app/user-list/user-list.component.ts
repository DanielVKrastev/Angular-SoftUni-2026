import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UserItemComponent } from './user-item/user-item.component';
import { SimpleUser } from '../types';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserItemComponent],
  providers: [UserService],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush, // (OnPush)->lock component (Defaul)->unlock
})
export class UserListComponent implements OnChanges {
  @Input('users') usersList: SimpleUser[] = [];

  constructor(private cd: ChangeDetectorRef, private us: UserService) {
    /*
      setInterval(() => {
        this.cd.detectChanges();
      }, 5000);
      */
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }

  refreshList() {
    this.cd.detectChanges();
  }
}
