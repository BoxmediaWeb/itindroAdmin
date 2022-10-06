import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoConcretoComponent } from './tipo-concreto.component';

describe('TipoConcretoComponent', () => {
  let component: TipoConcretoComponent;
  let fixture: ComponentFixture<TipoConcretoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoConcretoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoConcretoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
