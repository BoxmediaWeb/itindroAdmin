import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'app/core/api/api.service';
import moment from 'moment';
import { CambiarEstadoComponent } from './cambiar-estado/cambiar-estado.component';



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
    conductor: 'Fernando Andrés Salas',
    fecha_despacho: '06-05-2022',
    hora_despacho: '06:00 am',
    hora_llegada: '08:00 am',
    hora_descargue: '09:00 am',
    hora_fin: '10:00 am',
    estado:'2'
  },
];

@Component({
  selector: 'app-despachos',
  templateUrl: './despachos.component.html',
  styleUrls: ['./despachos.component.scss']
})
export class DespachosComponent implements OnInit {

  displayedColumns: string[] = ['id_pedido','cliente', 'conductor', 'fecha_despacho', 'hora_despacho', 'hora_llegada', 'hora_cargue', 'hora_fin', 'estado', 'acciones'];
  dataSource:any;
  items_totales=0;
  limit=10;
  offset=0;

  filtroPedidoForm = this._formBuilder.group({
    fecha1     : [, []],
    fecha2     : [, []],
    cliente     : [, []]
  });
  despachos: any;

  cambiarEstado() {
    const dialogRef = this._dialog.open(CambiarEstadoComponent, {
      minWidth: '500px',
      data:{}
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {});
  }

  pageChange(evt: PageEvent){
    this.limit = evt.pageSize;
    this.offset = evt.pageSize * evt.pageIndex;
    this.getDespachos();
    this.dataSource;
    this.items_totales;
  }

  getDespachos(){
    const nombreQuery ='pedido';

    const limit = this.limit ? `limit=${this.limit}&`:"";
    const offset = this.offset ? `offset=${this.offset}&`:"";
    const queryParams=`${limit}${offset}`;
  
    this._apiService.getData(nombreQuery,queryParams).
    subscribe((response) => {
      this.dataSource = response.rows;
      this.items_totales = response.count;
     },
     error=>{
       console.log("Ha habido el siguiente error =>",error);
     }
     );
  }




  getHora(id,hora){
    const nombreQuery =`pedido/${id}`;

    var dataPedido:any={
    }

    if(hora=='hora_despacho'){
      dataPedido.hora_despacho = moment().format('HH:mm');
      dataPedido.estado = "en descarga";
    }
    if(hora=='hora_llegada'){
      dataPedido.hora_llegada = moment().format('HH:mm');
    }
    if(hora=='hora_en_cargue'){
      dataPedido.hora_en_cargue = moment().format('HH:mm');
    }
    if(hora=='hora_fin'){
      dataPedido.hora_fin = moment().format('HH:mm');
      dataPedido.estado = "despachado";
    }
  
    this._apiService.setData(nombreQuery,dataPedido).
    subscribe((response) => {
      this.getDespachos();
      this.dataSource;
     },
     error=>{
       console.log(error);
       this._snackBar.open(`${error.error.error}`,null,{duration: 5 * 1000},
       );
     }
     );
  }

  constructor(private _formBuilder: FormBuilder,public _dialog: MatDialog, private _apiService: ApiService,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getDespachos();
    this.dataSource;
    this.items_totales;
    this.limit;
    this.offset;
  }

}
