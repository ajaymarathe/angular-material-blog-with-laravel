import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fancy-card',
  templateUrl: './fancy-card.component.html',
  styleUrls: ['./fancy-card.component.scss']
})
export class FancyCardComponent implements OnInit {

  @Input() icon;
  @Input() value;
  @Input() title;

  constructor() { }

  ngOnInit() {
  }

}
