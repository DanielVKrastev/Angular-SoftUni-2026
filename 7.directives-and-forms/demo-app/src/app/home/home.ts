import { Component } from '@angular/core';
import { HighLightDirective } from '../directives/highlight.directive';
import { MyRouterLinkDirective } from '../directives/my-router-link.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [HighLightDirective, MyRouterLinkDirective, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  color = 'red';
}
