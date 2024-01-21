import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthServiceService, private router: Router) {}

  ngOnInit(): void {
  }

  login() {
    this.authService.loginUser(this.userData).subscribe(
      (response: any) => {
        console.log('Login Response:', response);
        if (response.status) {
          console.log('sdasdsad');
          localStorage.setItem('token', response.token);
          // Redirect to the navbar or any desired route upon successful login
          this.router.navigate(['/feedbacks']);
        } else {
          // Handle unsuccessful login
          console.error('Login failed:', response.message);
        }
      },
      (error) => {
        console.error('Login Error:', error);
        // Handle login error
      }
    );
  }

}
