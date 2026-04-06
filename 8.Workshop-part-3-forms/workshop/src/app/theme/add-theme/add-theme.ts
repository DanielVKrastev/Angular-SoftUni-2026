import { Component } from '@angular/core';
import { ApiService } from '../../apiService';

@Component({
  selector: 'app-add-theme',
  imports: [],
  templateUrl: './add-theme.html',
  styleUrl: './add-theme.css',
})
export class AddTheme {
  constructor(private apiService: ApiService){}

  addTheme(event: Event, themeName: string, postText: string) {
    event.preventDefault();
    console.log(themeName, postText);
    this.apiService.createTheme(themeName, postText).subscribe(data => {
      console.log(data);
      //TODO: send data to server
    })
  }
}
