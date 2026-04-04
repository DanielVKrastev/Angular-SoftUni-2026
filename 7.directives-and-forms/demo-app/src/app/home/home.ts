import { Component } from '@angular/core';
import { HighLightDirective } from '../directives/highlight.directive';
import { MyRouterLinkDirective } from '../directives/my-router-link.directive';
import { CommonModule } from '@angular/common';
import { MyStructuralDirective } from '../directives/my-structural.directive';

@Component({
  selector: 'app-home',
  imports: [HighLightDirective, MyRouterLinkDirective, CommonModule, MyStructuralDirective],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  color = 'red';

  isShown = true;

  toggleIsShow() {
    this.isShown = !this.isShown;
  }
}
