import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { InsertarFuncionariosComponent } from 'app/modules/terceros/insertar-funcionarios/insertar-funcionarios.component';
import { InsertarTerceroComponent } from 'app/modules/terceros/insertar-tercero/insertar-tercero.component';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.scss']
})
export class InsertarComponent implements OnInit {

  
  perfilForm = this._formBuilder.group({
    remitente     : [, [Validators.required]],
    funcionario     : [, [Validators.required]],
    cargo     : [, [Validators.required]],
    fechaSuscripcion     : [, [Validators.required]],
    destinatario     : [, [Validators.required]],
    tiempoRespuesta     : [, [Validators.required]],
    descripcion     : [, [Validators.required]],
    resumen     : [, [Validators.required]],
    anexos     : [, [Validators.required]],
    folios     : [, [Validators.required]],
    tipoDocumento     : [, [Validators.required]],
    responsable     : [, [Validators.required]],
    conCopia     : [, [Validators.required]]
  });

  constructor(private _formBuilder: FormBuilder,public _dialog: MatDialog) { }

  insertarRemitente(comunicacion=null) {
    const dialogRef = this._dialog.open(InsertarTerceroComponent, {
      width: '500px'
    });
  }

  ngOnInit(): void {
  }

}
