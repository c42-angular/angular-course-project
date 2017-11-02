import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  signin(signupForm: NgForm) {
    console.log(signupForm);
    const email = signupForm.value.email;
    const password = signupForm.value.password;

    this.authService.signin(email, password);
  }
}
