// navbar.component.ts
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/Api/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout().subscribe(
      (response: any) => {
        console.log('Logout Response:', response);
        if (response.status) {
          // Redirect to the login page or any desired route upon successful logout
          this.router.navigate(['/login']);
        } else {
          // Handle unsuccessful logout
          console.error('Logout failed:', response.message);
        }
      },
      (error) => {
        console.error('Logout error:', error);
      }
    );
  }
}
