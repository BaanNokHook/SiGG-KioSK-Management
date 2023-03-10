import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiceNComponent } from './rice-n.component';

describe('RiceNComponent', () => {
  let component: RiceNComponent;
  let fixture: ComponentFixture<RiceNComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiceNComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiceNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
