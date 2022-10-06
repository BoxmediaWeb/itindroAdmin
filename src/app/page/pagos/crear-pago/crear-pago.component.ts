import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'app/core/api/api.service';
import moment from 'moment';

@Component({
  selector: 'app-crear-pago',
  templateUrl: './crear-pago.component.html',
  styleUrls: ['./crear-pago.component.scss']
})
export class CrearPagoComponent implements OnInit {

  pagoForm = this._formBuilder.group({
    fecha           : [, []],
    modo_pago       : [, []],
    valor           : [, []],
    observaciones   : [, []]
  });
  creditoId: any;
  dataCredito: any;

  /*guardar(){
    if(parseInt(this.dataCredito.abonos)+parseInt(this.pagoForm.value.valor)>parseInt(this.dataCredito.valor)){
      this._snackBar.open("El abono es mayor a la deuda",null,{duration: 5 * 1000},
      );
    }else{
      this.guardarPago();
    }
  }*/

  guardarPago(){
    const nombreQuery ='pago';
    const data = this.pagoForm.value;

    const dataPago = {
      fecha: moment(data.fecha).format('MM-DD-YYYY'),
      modo_pago:data.modo_pago,
      valor:data.valor,
      creditoValor:this.dataCredito.valor,
      observaciones:data.observaciones,
      creditoId:this.data.creditoId,
      creditoAbonos:this.dataCredito.abonos,
      creditoEstado:this.dataCredito.estado
    };

    this._apiService.setData(nombreQuery,dataPago).
    subscribe((response) => {
      console.log("Esta es la respuesta de la data =>", response);
      this.dialogRef.close({});
     },
     error=>{
       console.log(error);
       this._snackBar.open(`${error.error.error}`,null,{duration: 5 * 1000},);
     }
     );
  }

  getCredito(){
    const nombreQuery =`credito/${this.data.creditoId}`;
    //const search_nombre = this.search_nombre ? `search_nombre=${this.search_nombre}&`:"";
    //const id = this.creditoId ? `id=${this.creditoId}&`:"";
    const queryParams=``;
  
    this._apiService.getData(nombreQuery,queryParams).
    subscribe((response) => {
      console.log("Esta es la respuesta de la data =>", response.rows);
      this.dataCredito = response;
     },
     error=>{
       console.log(error);
     }
     );
  }

  constructor(private _formBuilder: FormBuilder,private _apiService: ApiService,@Inject(MAT_DIALOG_DATA) public data, public dialogRef: MatDialogRef<CrearPagoComponent>,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getCredito();
  }

}
