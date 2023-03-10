import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftDComponent } from './soft-d.component';

describe('SoftDComponent', () => {
  let component: SoftDComponent;
  let fixture: ComponentFixture<SoftDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoftDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
