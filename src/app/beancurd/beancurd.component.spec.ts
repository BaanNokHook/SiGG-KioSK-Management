import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeancurdComponent } from './beancurd.component';

describe('BeancurdComponent', () => {
  let component: BeancurdComponent;
  let fixture: ComponentFixture<BeancurdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeancurdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeancurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
