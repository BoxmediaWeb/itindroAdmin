import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insertar-tercero',
  templateUrl: './insertar-tercero.component.html',
  styleUrls: ['./insertar-tercero.component.scss']
})
export class InsertarTerceroComponent implements OnInit {

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

  constructor(private _formBuilder: FormBuilder,private _router:Router) { }

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

  volverTercero(){
    this._router.navigate([`/terceros`]);
  }

  ngOnInit(): void {

    this.setFormFuncionario();

  }
}
