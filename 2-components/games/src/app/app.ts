import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { About } from './about/about';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  title = 'Hello there';
  currentView = 'home';

  changeView(view: string){
    this.currentView  = view;
  }
}
