import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from 'src/app/providers/user-data';
import { UserOptions } from 'src/app/interfaces/user-options';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  signup: UserOptions = { username: '', password: '' };
  submitted = false;

  constructor(
    public router: Router,
    public userData: UserData
  ) { }

  onSignup(form: NgForm) {
    this.userData.signup(this.signup.username);
    this.router.navigateByUrl('/app/tabs/schedule');
  }

}
