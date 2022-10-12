import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-insertar-funcionarios',
  templateUrl: './insertar-funcionarios.component.html',
  styleUrls: ['./insertar-funcionarios.component.scss']
})
export class InsertarFuncionariosComponent implements OnInit {


  funcionarioForm = this._formBuilder.group({
    nombre      : [, [Validators.required]],
    cargo       : [, [Validators.required]]
  });

  constructor(private _formBuilder: FormBuilder,@Inject(MAT_DIALOG_DATA) public data) { }

  setFormInputs(){

    const funcionario = {
      nombre:this.data.funcionario.nombre,
      cargo:this.data.funcionario.cargo
    }

    this.funcionarioForm.patchValue(funcionario);
  }

  ngOnInit(): void {
    if (this.data.funcionario) {
      this.setFormInputs();
    }
  }

}
