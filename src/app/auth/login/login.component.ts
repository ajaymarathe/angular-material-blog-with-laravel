import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router) { }

  email;
  password;

  // resposnse data
  resposneData;
  responseError;

  ngOnInit() {
  }

  // loggged in user
  Submit() {
    const loginData = [this.email, this.password];
    console.log(loginData);

    this.authService.login(loginData)
      .subscribe(
        (response: Response) => {
          console.log(response);
          this.resposneData = response;
          localStorage.setItem('access_token', this.resposneData.token);
          localStorage.setItem('user_name', this.resposneData.name);
          this.toastr.success(this.resposneData.name, 'Welcome!!');
          this.router.navigate(['dashboard']);
        },
        (error) => {
          console.log(error);
          this.responseError = error;
          this.toastr.error(this.responseError.message, 'Error!!');
        }
      );
  }

}
