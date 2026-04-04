import { Component } from '@angular/core';
import { HighLightDirective } from '../directives/highlight.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [HighLightDirective, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
