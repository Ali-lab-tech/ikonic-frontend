import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userData: any = {
    name: '',
    email: '',
    password: ''
  };
  registrationError: string = '';


  constructor(private AuthServiceService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
  }
   // auth-service.service.ts
register() {
  this.AuthServiceService.registerUser(this.userData).subscribe(
    (response) => {
      console.log('Registration Response:', response);
      if (response) {
        this.router.navigate(['/login']);
      } else {
        this.registrationError = 'Registration failed. Please try again.';
      }
    },
    (error) => {
      console.error('Registration Error:', error);
      this.registrationError = 'Registration failed. Please try again.';
    }
  );
}

}
