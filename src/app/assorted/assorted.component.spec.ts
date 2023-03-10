import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssortedComponent } from './assorted.component';

describe('AssortedComponent', () => {
  let component: AssortedComponent;
  let fixture: ComponentFixture<AssortedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssortedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssortedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
