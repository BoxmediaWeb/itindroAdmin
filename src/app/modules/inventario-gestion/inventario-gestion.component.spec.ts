import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventarioGestionComponent } from './inventario-gestion.component';

describe('InventarioGestionComponent', () => {
  let component: InventarioGestionComponent;
  let fixture: ComponentFixture<InventarioGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventarioGestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventarioGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
