import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToTheTopComponent } from './back-to-the-top.component';

describe('BackToTheTopComponent', () => {
  let component: BackToTheTopComponent;
  let fixture: ComponentFixture<BackToTheTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackToTheTopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackToTheTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
