import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerarExcelComponent } from './generar-excel.component';

describe('GenerarExcelComponent', () => {
  let component: GenerarExcelComponent;
  let fixture: ComponentFixture<GenerarExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerarExcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerarExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
