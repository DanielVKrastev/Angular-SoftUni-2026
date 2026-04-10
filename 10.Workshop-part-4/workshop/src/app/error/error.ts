import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  imports: [RouterLink],
  templateUrl: './error.html',
  styleUrl: './error.css',
})
export class PageNotFoundComponent {}
