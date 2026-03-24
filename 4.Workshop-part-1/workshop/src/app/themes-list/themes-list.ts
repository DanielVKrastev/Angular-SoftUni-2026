import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiService';

@Component({
  selector: 'app-themes-list',
  imports: [],
  templateUrl: './themes-list.html',
  styleUrl: './themes-list.css',
})
export class ThemesList implements OnInit{
  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
    this.apiService.getThemes().subscribe(t => {
      console.log(t);
      
    });
  }
}
