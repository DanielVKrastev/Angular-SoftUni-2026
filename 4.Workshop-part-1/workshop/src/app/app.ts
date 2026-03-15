import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  title = 'workshop';

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get(
      'https://workshop-angular-feb-2026-default-rtdb.europe-west1.firebasedatabase.app/product.json'
    )
    .subscribe((x) => {
      console.log(x);
      
    })
  }
}
