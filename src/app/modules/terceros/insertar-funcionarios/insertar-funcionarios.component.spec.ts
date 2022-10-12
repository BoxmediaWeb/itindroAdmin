import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertarFuncionariosComponent } from './insertar-funcionarios.component';

describe('InsertarFuncionariosComponent', () => {
  let component: InsertarFuncionariosComponent;
  let fixture: ComponentFixture<InsertarFuncionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertarFuncionariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertarFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
