import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import {Location} from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  account: Account;

  constructor(private http: HttpClient,
              private location: Location,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
    }

  message = '';
  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

     // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  // Login based on username and password
  public postLogin() {
    const serializedForm = this.loginForm.getRawValue();
    this.http.post(`http://localhost:3000/login`, serializedForm).subscribe( result => {
      if ( result['message'] ) {
        this.message = result['message'];
        this.loginForm.reset();
      }
      else {
      this.account = (result as Account);
      this.message = 'You are successfully logged in!';
      this.loginForm.reset();

    }
    });
  }
}

