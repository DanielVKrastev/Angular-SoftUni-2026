import { Component, OnInit } from '@angular/core';
import { ApiService } from '../apiService';

@Component({
  selector: 'app-posts-list',
  imports: [],
  templateUrl: './posts-list.html',
  styleUrl: './posts-list.css',
})
export class PostsList implements OnInit {
  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
    this.apiService.getPosts(5).subscribe(posts => {
      console.log(posts);
      
    })
  }
}
