import { Component } from '@angular/core';
import { ApiService } from '../../apiService';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-theme',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-theme.html',
  styleUrl: './add-theme.css',
})
export class AddTheme {
  constructor(private apiService: ApiService, private router: Router){}

  addTheme(form: NgForm) {
    console.log(form);
    
    if(form.invalid){
      return;
    }
    
    const {themeName, postText } = (form.value);

    this.apiService.createTheme(themeName, postText).subscribe(data => {
      this.router.navigate(['/themes']);
    })

  }
}
