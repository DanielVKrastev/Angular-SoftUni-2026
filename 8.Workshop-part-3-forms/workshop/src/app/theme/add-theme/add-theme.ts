import { Component } from '@angular/core';
import { ApiService } from '../../apiService';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-theme',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-theme.html',
  styleUrl: './add-theme.css',
})
export class AddTheme {
  constructor(private apiService: ApiService){}

  addTheme(form: NgForm) {
    console.log(form);
    
    if(form.invalid){
      return;
    }
    
    console.log(form.value);
    /*
    this.apiService.createTheme(themeName, postText).subscribe(data => {
      console.log(data);
      //TODO: send data to server
    })
      */
  }
}
