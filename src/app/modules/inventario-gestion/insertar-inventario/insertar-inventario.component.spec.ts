import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarInventarioComponent } from './insertar-inventario.component';

describe('InsertarInventarioComponent', () => {
  let component: InsertarInventarioComponent;
  let fixture: ComponentFixture<InsertarInventarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarInventarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarInventarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
