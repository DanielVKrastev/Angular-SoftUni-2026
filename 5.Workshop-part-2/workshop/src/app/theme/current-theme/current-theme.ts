import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../apiService';
import { Theme } from '../../types/themes';

@Component({
  selector: 'app-current-theme',
  standalone: true,
  imports: [],
  templateUrl: './current-theme.html',
  styleUrl: './current-theme.css',
})
export class CurrentTheme implements OnInit{
  theme = {} as Theme;
  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
 /*   this.route.params.subscribe(data => {
      console.log(data['themeId']);
      
    })
      */

    const themeId = (this.route.snapshot.params['themeId']);
    
    this.apiService.getSingleTheme(themeId).subscribe(theme => {
      this.theme = theme;
    })
  }
}
