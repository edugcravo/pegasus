import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
url = environment.apiUrl;

constructor(private http: HttpClient) { 

}




login(data: any){
  return this.http.post(`${this.url}/login/login`, data).toPromise();
}

}
