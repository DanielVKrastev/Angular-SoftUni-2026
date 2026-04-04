import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  standalone: true,
  styleUrl: './login.css',
})
export class Login {
  @ViewChild('loginForm') form: NgForm | undefined;

  formSubmitHandler() {

    const form = this.form;

    if (form?.invalid) {
      console.log('this form is invalid!');
      return;
    }

    console.log('Form has been submited');
    console.log(form?.value); //controls

  }
}
