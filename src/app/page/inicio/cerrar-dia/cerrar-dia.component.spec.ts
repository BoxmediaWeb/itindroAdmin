import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerrarDiaComponent } from './cerrar-dia.component';

describe('CerrarDiaComponent', () => {
  let component: CerrarDiaComponent;
  let fixture: ComponentFixture<CerrarDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CerrarDiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CerrarDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
