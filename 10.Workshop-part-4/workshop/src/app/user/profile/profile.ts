import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { emailValidator } from '../../utils/email.validator';
import { EMAIL_DOMAINS } from '../../../constants';
import { ProfileDetails } from '../../types/user';
import { UserService } from '../user';

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit{
  isEditMode: boolean = false;

  profileDetails:ProfileDetails = {
    username: '',
    email: '',
    tel: '',
  }

  form = new FormGroup({
    username: new FormControl(this.profileDetails.username, [Validators.required, Validators.minLength(5)]),
    email: new FormControl(this.profileDetails.email, [Validators.required, emailValidator(EMAIL_DOMAINS)]),
    tel: new FormControl(this.profileDetails.tel),
  });

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    const { username, email, tel} = this.userService?.user!;
    
    this.profileDetails = { username, email, tel: tel! };

    this.form.setValue({
      username, email, tel: tel!
    });
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  handleSaveProfile(){

    if(this.form.invalid){
      return;
    }

    this.profileDetails = this.form.value as ProfileDetails;

    const {username, email, tel} = this.profileDetails;
    this.userService.updateProfile(username, email, tel).subscribe(() => {
      this.toggleEditMode();
    });

  }

  onCancel(event: Event) {
    event.preventDefault();

    //reset form after closing
    this.form.controls['username'].setValue(this.profileDetails.username);
    this.form.controls['email'].setValue(this.profileDetails.email);
    this.form.controls['tel'].setValue(this.profileDetails.tel);
    
    
    this.toggleEditMode();
  }
}
