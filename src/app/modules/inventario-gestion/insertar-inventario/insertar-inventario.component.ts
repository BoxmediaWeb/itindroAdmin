import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-insertar-inventario',
  templateUrl: './insertar-inventario.component.html',
  styleUrls: ['./insertar-inventario.component.scss']
})
export class InsertarInventarioComponent implements OnInit {

  funcionarioForm = this._formBuilder.group({
    nombre                         : [, [Validators.required]],
    cargo                          : [, [Validators.required]],
    seccion                        : [, [Validators.required]],
    serie                          : [, [Validators.required]],
    subSerie                       : [, [Validators.required]],
    frecuenciaConsulta             : [, [Validators.required]],
    fechaInicio                    : [, [Validators.required]],
    fechaFin                       : [, [Validators.required]],
    tdr                            : [, [Validators.required]],
    fechaTranferir                 : [, [Validators.required]],
    unidadConservacion             : [, [Validators.required]],
    folios                         : [, [Validators.required]],
    soporte                        : [, [Validators.required]],
    pasillo                        : [, [Validators.required]],
    estante                        : [, [Validators.required]],
    fila                           : [, [Validators.required]],
    identificacionExpediente       : [, [Validators.required]],
  });

  constructor(private _formBuilder: FormBuilder) { }

  setFormInputs(){

    /*const funcionario = {
      nombre:this.data.funcionario.nombre,
      cargo:this.data.funcionario.cargo
    }*/

    //this.funcionarioForm.patchValue(funcionario);
  }

  ngOnInit(): void {
    /*if (this.data.funcionario) {
      this.setFormInputs();
    }*/
  }

}
