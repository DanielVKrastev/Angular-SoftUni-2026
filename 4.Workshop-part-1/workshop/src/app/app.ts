import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './core/header/header';
import { Footer } from './core/footer/footer';
import { MainComponent } from './main/main.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, MainComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{
  title = 'workshop';

}
