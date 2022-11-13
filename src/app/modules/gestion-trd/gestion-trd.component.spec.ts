import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionTRDComponent } from './gestion-trd.component';

describe('GestionTRDComponent', () => {
  let component: GestionTRDComponent;
  let fixture: ComponentFixture<GestionTRDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionTRDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionTRDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
