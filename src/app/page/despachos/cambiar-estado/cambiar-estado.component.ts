import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cambiar-estado',
  templateUrl: './cambiar-estado.component.html',
  styleUrls: ['./cambiar-estado.component.scss']
})
export class CambiarEstadoComponent implements OnInit {

  filtroPedidoForm = this._formBuilder.group({
    estado     : [, []]
  });

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
