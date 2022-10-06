import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'app/core/api/api.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA = [
  {
    valor_pedidos: '2000',
    abonos: '500000',
    saldo: '100'
  },
];

@Component({
  selector: 'app-lista-pagos',
  templateUrl: './lista-pagos.component.html',
  styleUrls: ['./lista-pagos.component.scss']
})
export class ListaPagosComponent implements OnInit {

  displayedColumns: string[] = ['valor_pedidos', 'abonos', 'saldo'];
  dataSource:any;

  constructor(private _apiService: ApiService,@Inject(MAT_DIALOG_DATA) public data,public dialogRef: MatDialogRef<ListaPagosComponent>) { }

  getPagos(){
    const nombreQuery ='pago';
    //const search_nombre = this.search_nombre ? `search_nombre=${this.search_nombre}&`:"";
    const creditoId = this.data.credito.id ? `creditoId=${this.data.credito.id}&`:"";
    const queryParams=`${creditoId}`;
  
    this._apiService.getData(nombreQuery,queryParams).
    subscribe((response) => {
      console.log("Esta es la respuesta de la data =>", response);
      this.dataSource = response;
     },
     error=>{
       console.log(error);
     }
     );
  }

  ngOnInit(): void {
    this.getPagos();
    this.dataSource;
  }

}
