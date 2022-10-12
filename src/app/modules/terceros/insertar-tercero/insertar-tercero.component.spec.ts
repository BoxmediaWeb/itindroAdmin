import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarTerceroComponent } from './insertar-tercero.component';

describe('InsertarTerceroComponent', () => {
  let component: InsertarTerceroComponent;
  let fixture: ComponentFixture<InsertarTerceroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarTerceroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarTerceroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
