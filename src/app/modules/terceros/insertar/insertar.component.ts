import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.scss']
})
export class InsertarComponent implements OnInit {

  
  perfilForm = this._formBuilder.group({
    razonSocial     : [, [Validators.required]],
    tipoDocumento     : [, [Validators.required]],
    documento     : [, [Validators.required]],
    pais     : [, [Validators.required]],
    departamento     : [, [Validators.required]],
    municipio     : [, [Validators.required]],
    centrosPoblados     : [, [Validators.required]],
    direccion     : [, [Validators.required]],
    telefono     : [, [Validators.required]],
    celular     : [, [Validators.required]],
    email     : [, [Validators.required]]
  });

  constructor(private _formBuilder: FormBuilder) { }

  setFormFuncionario(){

    const tercero = {
      id:1,
      razonSocial:"Box Media S.A.S",
      tipoDocumento:"NIT",
      documento:"1090481240",
      departamento:"Antioquia",
      ciudad:"Medellín",
      centroPoblado:"#1",
      email:"andres@gmail.com",
      direccion:"Cl 6 # 4-27 Robledo",
      telefono:"65464564",
      celular:"464646+4",
      cargo:"Desarrollador",
      funcionarios:"Lista",
    }

    this.perfilForm.patchValue(tercero);

  }

  ngOnInit(): void {

    this.setFormFuncionario();

  }
}
