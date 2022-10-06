import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cambio-estado-credito',
  templateUrl: './cambio-estado-credito.component.html',
  styleUrls: ['./cambio-estado-credito.component.scss']
})
export class CambioEstadoCreditoComponent implements OnInit {

  filtroPedidoForm = this._formBuilder.group({
    estado     : [, []]
  });

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
