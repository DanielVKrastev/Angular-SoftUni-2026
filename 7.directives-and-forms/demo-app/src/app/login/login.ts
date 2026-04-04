import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MaxCountDirective } from '../directives/max-count.directivets';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, MaxCountDirective],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  @ViewChild('loginForm') form: NgForm | undefined;

  formSubmitHandler() {
    const form = this.form!;

    if (form?.invalid) {
      console.log('This form is invalid!');
      return;
    }

    form.reset();
  }
}