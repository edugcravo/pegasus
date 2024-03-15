import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http: HttpClient, private router: Router) { }

url = environment.apiUrl

headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Accept-Enconding': 'gzip',
  Authorization: 'Bearer ' + localStorage.getItem('token')
});

// Método para obter o token armazenado no localStorage
getToken() {
  return localStorage.getItem('token');
}





isLoggedIn(): boolean {
  // Verifica se o token JWT está presente no localStorage e se é adm pelo local storage
  return !!localStorage.getItem('token');
}


logout(){
  localStorage.removeItem('token');
  this.router.navigate(['/login']);
  }


}
