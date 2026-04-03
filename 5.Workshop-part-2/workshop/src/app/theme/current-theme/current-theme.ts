import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../apiService';
import { Theme } from '../../types/themes';
import { Loader } from '../../shared/loader/loader';

@Component({
  selector: 'app-current-theme',
  standalone: true,
  imports: [Loader],
  templateUrl: './current-theme.html',
  styleUrls: ['./current-theme.css'],
})
export class CurrentTheme implements OnInit{
  theme: Theme = <Theme>{};
  isLoading: boolean = true;
  constructor(private route: ActivatedRoute, private apiService: ApiService, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
 /*   this.route.params.subscribe(data => {
      console.log(data['themeId']);
      
    })
      */
    const themeId = (this.route.snapshot.params['themeId']);
    
    this.apiService.getSingleTheme(themeId).subscribe(theme => {
      this.theme = theme;
      this.isLoading = false;
      this.cd.detectChanges();
    })
    
  }
}
