import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  account: User;

  @Input() public successMessage: string;

  constructor(private http: HttpClient,
              private location: Location,
              private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
  }

  message = '';
  registered = 'false';
  
  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }
  // Login based on username and password
   public postAccount() {
    const serializedForm = {
      account: this.registerForm.getRawValue()
    };
    this.http.post(`http://50.29.151.120:3000/account`, serializedForm).subscribe( result => {
      if ( result['code'] === 400 ) {
      this.message = result['message'];
        this.registerForm.reset();
      }
      else {
        this.account = (result as User);
        this.registered = 'true';
        this.message = 'You are successfully registered!';
        this.registerForm.reset();
        this.router.navigate(['/']);
        // this.successMessage = `Hi ${this.account.firstName}`;
      }
    });
    }
}
