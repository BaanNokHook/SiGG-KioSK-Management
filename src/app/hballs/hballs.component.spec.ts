import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HBallsComponent } from './hballs.component';

describe('HBallsComponent', () => {
  let component: HBallsComponent;
  let fixture: ComponentFixture<HBallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HBallsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HBallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
