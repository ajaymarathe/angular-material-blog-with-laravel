import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'base-navbar',
  templateUrl: './base-navbar.component.html',
  styleUrls: ['./base-navbar.component.scss']
})
export class BaseNavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Admin() {
    this.router.navigate(['/admin']);
    console.log(this.router.url);
  }


}
