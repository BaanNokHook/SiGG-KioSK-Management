import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomemadePasteComponent } from './homemade-paste.component';

describe('HomemadePasteComponent', () => {
  let component: HomemadePasteComponent;
  let fixture: ComponentFixture<HomemadePasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomemadePasteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomemadePasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
