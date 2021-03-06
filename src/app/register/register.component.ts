import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  id: string;
  isSuccessful = false;
  isUpdateSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,
              private userService: UserService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = location.pathname.split('/')[2];

    this.route.queryParams.subscribe(queryParams => {
      this.form.username = queryParams.username;
      this.form.email = queryParams.email;
      switch (queryParams.roles) {
        case 'ROLE_USER':
          this.form.role = '';
          break;
        case 'ROLE_MODERATOR':
          this.form.role = 'mod';
          break;
        case 'ROLE_ADMIN':
          this.form.role = 'admin';
          break;
        default:
          break;
      }
    });
  }

  onSubmit() {
    if (!this.id) {
      this.authService.register(this.form).subscribe(
        data => {
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        },
        err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
    } else {
      this.form.id = this.id;
      this.userService.update(this.form).subscribe(
        data => {
          this.isUpdateSuccessful = true;
          this.isSignUpFailed = false;
        },
        err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        });
    }
  }
}
