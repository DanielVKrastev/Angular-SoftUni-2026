import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  companyName = 'Games Depot';
  foundYear = '2020'

  manager: {
    name: string,
    email: string
  } | null = {
    name: 'Daniel',
    email: 'daniel@mail.com'
  }
}
