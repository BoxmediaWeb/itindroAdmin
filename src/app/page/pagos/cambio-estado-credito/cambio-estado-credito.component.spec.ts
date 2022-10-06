import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioEstadoCreditoComponent } from './cambio-estado-credito.component';

describe('CambioEstadoCreditoComponent', () => {
  let component: CambioEstadoCreditoComponent;
  let fixture: ComponentFixture<CambioEstadoCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CambioEstadoCreditoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CambioEstadoCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
