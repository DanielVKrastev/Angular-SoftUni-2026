import { Component } from '@angular/core';
import { HighLightDirective } from '../directives/highlight.directive';
import { MyRouterLinkDirective } from '../directives/my-router-link.directive';

@Component({
  selector: 'app-home',
  imports: [HighLightDirective, MyRouterLinkDirective],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
