import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { emailValidator } from '../../utils/email.validator';
import { EMAIL_DOMAINS } from '../../../constants';
import { matchPasswordsValidator } from '../../utils/match-passwords.validator';

@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  form = new FormGroup(
    {
      username: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, emailValidator(EMAIL_DOMAINS)]),
      tel: new FormControl(''),
      passGroup: new FormGroup({
        password: new FormControl('', [Validators.required]),
        rePassword: new FormControl('', [Validators.required]),
      },
    {
      validators: [matchPasswordsValidator('password', 'rePassword')],
    }),
    }
  );

  isFieldTextMissing(controlName: string) {
    return (
      this.form.get(controlName)?.touched &&
      this.form.get(controlName)?.errors?.['required']
    );
  }

  get isNotMinLength() {
    return (
      this.form.get('username')?.touched &&
      this.form.get('username')?.errors?.['minlength']
    );
  }

  get isEmailNotValid() {
    return (
      this.form.get('email')?.touched &&
      this.form.get('email')?.errors?.['emailValidator']
    );
  }

  get passGroup(){
    return this.form.get('passGroup');
  }

  register(){
    if(this.form.invalid){
      return;
    }
    console.log(this.form.value);
  }
}
