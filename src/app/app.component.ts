import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) { } //inject here

  title = 'blog';

  auth = false;

  ngOnInit() {
    this.checkAuth();
    this.currentRoute();
  }

  checkAuth() {
    if (localStorage.getItem('access_token')) {
      this.auth = true;
    }
    else {
      this.auth = false;
    }
  }

  currentRoute() {
    console.log(this.router.url);
  }
}
