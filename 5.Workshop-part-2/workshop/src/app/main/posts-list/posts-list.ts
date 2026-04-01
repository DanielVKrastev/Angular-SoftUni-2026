import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiService } from '../../apiService';
import { Post } from '../../types/post';
import { Loader } from '../../shared/loader/loader';

@Component({
  selector: 'app-posts-list',
  imports: [Loader],
  templateUrl: './posts-list.html',
  styleUrl: './posts-list.css',
})
export class PostsList implements OnInit {
  posts: Post[] = [];
  isLoading = true;
  constructor(private apiService: ApiService, private cd: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.apiService.getPosts(5).subscribe(posts => {
      console.log(posts);
      this.posts = posts;
      this.isLoading = false;
      this.cd.detectChanges();
    })
  }
}
