import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:8000/api/';

  // register  

  register(registerData) {
    return this.http.post(this.url + 'signup', {
      'name': registerData[0],
      'email': registerData[1],
      'password': registerData[2],
      'c_password': registerData[3]
    });
  }

  // login 

  login(loginData) {
    return this.http.post(this.url + 'login', {
      'email': loginData[0],
      'password': loginData[1]
    })
  }
}
