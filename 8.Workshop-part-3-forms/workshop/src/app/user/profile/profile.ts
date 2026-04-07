import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { emailValidator } from '../../utils/email.validator';
import { EMAIL_DOMAINS } from '../../../constants';
import { ProfileDetails } from '../../types/user';

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  isEditMode: boolean = false;

  profileDetails:ProfileDetails = {
    username: 'Daniel',
    email: 'danielk@gmail.com',
    tel: '123-123-123',
  }

  form = new FormGroup({
    username: new FormControl(this.profileDetails.username, [Validators.required, Validators.minLength(5)]),
    email: new FormControl(this.profileDetails.email, [Validators.required, emailValidator(EMAIL_DOMAINS)]),
    tel: new FormControl(this.profileDetails.tel),
  });

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  handleSaveProfile(){

    if(this.form.invalid){
      return;
    }

    this.profileDetails = this.form.value as ProfileDetails;
  }

  onCancel(event: Event) {
    event.preventDefault();
    this.form.updateValueAndValidity();
    
    this.toggleEditMode();
  }
}
