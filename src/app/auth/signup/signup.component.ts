import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  signup(signupForm: NgForm) {
    console.log(signupForm);
    const email = signupForm.value.email;
    const password = signupForm.value.password;

    this.authService.signup(email, password);
  }
}
