import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcretoComponent } from './concreto.component';

describe('ConcretoComponent', () => {
  let component: ConcretoComponent;
  let fixture: ComponentFixture<ConcretoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcretoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcretoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
