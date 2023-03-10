import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomDummplingComponent } from './hom-dummpling.component';

describe('HomDummplingComponent', () => {
  let component: HomDummplingComponent;
  let fixture: ComponentFixture<HomDummplingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomDummplingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomDummplingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
