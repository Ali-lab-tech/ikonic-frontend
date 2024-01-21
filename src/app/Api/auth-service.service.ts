import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private apiUrl = environment.BASE_URL;
  constructor(private http: HttpClient) {}

  registerUser(user: any) {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  loginUser(credentials: any) {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  // logout() {
  //   const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
  //   return this.http.post(`${this.apiUrl}/logout`, {}, { headers });
  // }

  logout() {
    const headers = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    return this.http.post(`${this.apiUrl}/logout`, {}, { headers }).pipe(
      tap(() => {
        // Clear the token from localStorage upon successful logout
        localStorage.removeItem('token');
      })
    );
  }

}
