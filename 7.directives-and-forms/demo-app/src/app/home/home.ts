import { Component } from '@angular/core';
import { HighLightDirective } from '../directives/highlight.directive';

@Component({
  selector: 'app-home',
  imports: [HighLightDirective],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
