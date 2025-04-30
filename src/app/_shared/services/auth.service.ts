import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, from, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenKey = 'jwtToken';

  constructor(private http: HttpClient, private router: Router) { }


  getToken(): Observable<string | null> {
    if(typeof window === 'undefined'){
      console.log('window undefined returning null token');
      return of(null);
    }

    const token = sessionStorage.getItem(this.tokenKey);
    if (token) {
      console.log('token existing');
      return of(token);
    }
    else {
      console.log('Token not found in session storage. Trying TWK.generateToken().');
      return from(TWK.generateToken()).pipe(
        switchMap((response: any) => {
          if (response.success) {
            const newToken = response.result.token;
            if (newToken) {
              sessionStorage.setItem(this.tokenKey, newToken);
            }
            return of(newToken);
          } else {
            throw new Error('Failed to fetch user token.');
          }
        }),
        catchError((error) => {
          console.error('Error fetching token:', error);
          return of(null);
        })
      );
    }
  }


  clearToken(): void {
    if ((typeof window !== 'undefined') && window.sessionStorage){
      sessionStorage.removeItem(this.tokenKey);
    }
  }


  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
