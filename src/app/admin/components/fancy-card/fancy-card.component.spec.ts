import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyCardComponent } from './fancy-card.component';

describe('FancyCardComponent', () => {
  let component: FancyCardComponent;
  let fixture: ComponentFixture<FancyCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FancyCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FancyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
