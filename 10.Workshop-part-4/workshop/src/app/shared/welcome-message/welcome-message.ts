import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome-message',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './welcome-message.html',
  styleUrl: './welcome-message.css',
})
export class WelcomeMessage {
  @Input('isLoggedIn') isLoggedIn = false;
}
