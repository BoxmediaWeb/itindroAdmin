import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ApiService } from 'app/core/api/api.service';
import { Subject } from 'rxjs';
import { CambiarEstadoComponent } from '../despachos/cambiar-estado/cambiar-estado.component';
import { CambioEstadoCreditoComponent } from './cambio-estado-credito/cambio-estado-credito.component';
import { CrearPagoComponent } from './crear-pago/crear-pago.component';
import { ListaPagosComponent } from './lista-pagos/lista-pagos.component';



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA = [
  {
    id_pedido: '01',
    cliente: 'Fernando',
    fecha_despacho: '12-12-2020',
    estado_pedido:'1',
    valor_pedido:'20000',
    ultimo_pago:'12-02-2020',
    saldo:'10000',
    fecha_pago: '12-12-2022',
    estado_credito:'3'
  },
];

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.scss']
})
export class PagosComponent implements OnInit {

  displayedColumns: string[] = ['id_pedido','cliente','fecha_despacho','estado_pedido','valor_pedido','abonos','ultimo_pago','saldo','fecha_pago','estado_credito','estado','acciones'];
  dataSource:any;
  credito$ = new Subject();
  limit=10;
  offset=0;
  items_totales=0;

  filtroPedidoForm = this._formBuilder.group({
    fecha1     : [, []],
    fecha2     : [, []],
    cliente     : [, []]
  });

  cambiarEstadoModal() {
    const dialogRef = this._dialog.open(CambioEstadoCreditoComponent, {
      minWidth: '500px',
      data:{}
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {});
  }

  crearPagoModal(credito) {
    const dialogRef = this._dialog.open(CrearPagoComponent, {
      width: '500px',
      data:{
        creditoId:credito.id
      }
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      this.getPagos();
    });
  }

  listaPagoModal(credito) {
    const dialogRef = this._dialog.open(ListaPagosComponent, {
      minWidth: '500px',
      data:{
        credito:credito
      }
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {});
  }

  pageChange(evt: PageEvent){
    this.limit = evt.pageSize;
    this.offset = evt.pageSize * evt.pageIndex;
    this.getPagos();
  }

  getPagos(){
    const nombreQuery ='credito';
    //const search_nombre = this.search_nombre ? `search_nombre=${this.search_nombre}&`:"";
    const limit = this.limit ? `limit=${this.limit}&`:"";
    const offset = `offset=${this.offset}`;

    const queryParams=`${limit}${offset}`;
  
    this._apiService.getData(nombreQuery,queryParams).
    subscribe((response) => {
      console.log("Esta es la respuesta de la data =>", response);
      this.credito$.next(response.rows);
      this.items_totales=response.count;
     },
     error=>{
       console.log(error);
     }
     );
  }

  constructor(private _formBuilder: FormBuilder,public _dialog: MatDialog,private _apiService: ApiService) { }

  ngOnInit(): void {

    this.credito$.subscribe(data=>this.dataSource=data);

    this.getPagos();
  }

}
