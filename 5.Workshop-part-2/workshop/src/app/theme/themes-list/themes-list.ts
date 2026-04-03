import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiService } from '../../apiService';
import { Theme } from '../../types/themes';
import { Loader } from '../../shared/loader/loader';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-themes-list',
  imports: [Loader, RouterLink],
  templateUrl: './themes-list.html',
  styleUrl: './themes-list.css',
})
export class ThemesList implements OnInit {
  themes: Theme[] = [];
  isLoading = true;

  constructor(private apiService: ApiService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.apiService.getThemes().subscribe(themes => {
      this.themes = themes;
      this.isLoading = false;
      this.cd.detectChanges();
    });
  }
}