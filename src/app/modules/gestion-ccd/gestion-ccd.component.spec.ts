import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCCDComponent } from './gestion-ccd.component';

describe('GestionCCDComponent', () => {
  let component: GestionCCDComponent;
  let fixture: ComponentFixture<GestionCCDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionCCDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCCDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
