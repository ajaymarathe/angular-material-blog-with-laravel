import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router) { }

  name;
  email;
  password;
  c_password;

  //response 
  responseData;
  responseError;

  ngOnInit() {
  }


  Submit() {
    const signupData = [this.name, this.email, this.password, this.c_password];
    console.log(signupData)
    this.authService.register(signupData)
      .subscribe(
        (response: Response) => { //get response
          console.log(response);
          this.responseData = response;
          this.toastr.success(this.responseData.message + ' Please Login to Continue', 'Success!!');
          this.router.navigate(['/login']);
        },
        (error) => {
          console.log(error);
          this.responseError = error;
          this.toastr.error(this.responseError.message, 'Error!!');
        }
      );

  }


}
