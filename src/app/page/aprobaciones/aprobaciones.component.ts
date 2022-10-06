import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ApiService } from 'app/core/api/api.service';
import moment from 'moment';
import { CerrarDiaComponent } from '../inicio/cerrar-dia/cerrar-dia.component';
import { GenerarExcelComponent } from '../inicio/generar-excel/generar-excel.component';
import { PedidoComponent } from '../inicio/pedido/pedido.component';

@Component({
  selector: 'app-aprobaciones',
  templateUrl: './aprobaciones.component.html',
  styleUrls: ['./aprobaciones.component.scss']
})
export class AprobacionesComponent implements OnInit {

  limit=10;
  offset=0;
  items_totales=0;
  pagina = 1;
  fechaInicio = "";
  fechaFin="";

  displayedColumns2: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['cliente', 'fecha_despacho', 'direccion', 'observaciones', 'descarga', 'concreto', 'precio_concreto', 'm3', 'precio_pedido', 'vendedor', 'conductor', 'acciones'];
  dataSource:any[]=[];


  filtroPedidoForm = this._formBuilder.group({
    fecha1     : [, []],
    fecha2     : [, []],
    cliente     : [, []]
  });

  constructor(private _formBuilder: FormBuilder,public _dialog: MatDialog, private _apiService: ApiService) { }

  
  generarExcelModal() {
    const dialogRef = this._dialog.open(GenerarExcelComponent, {
      minWidth: '500px',
      data:{}
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {});
  }

  cerrarDiaModal() {
    const dialogRef = this._dialog.open(CerrarDiaComponent, {
      minWidth: '500px',
      data:{}
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {});
  }

  pedidoModal() {
    const dialogRef = this._dialog.open(PedidoComponent, {
      minWidth: '500px',
      data:{}
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      this.getPedido();
      this.dataSource;
    });
  }

  searchNombreCliente(){
    this.getPedido();
  }

  searchNombre($event){
    console.log("Está haciendo la actualización.");
    const data = this.filtroPedidoForm.value;
    this.fechaInicio = data.fecha1;
    this.fechaFin = data.fecha2;
    this.getPedido();
  }

  getPedido(){
    const data = this.filtroPedidoForm.value;
    const nombreQuery ='pedido';
    const search_nombre_cliente = data.cliente ? `search_nombre_cliente=${data.cliente}&`:"";
    /*const fechaInicio = this.fechaInicio ? `fechaInicio=${moment(this.fechaInicio).format('MM-DD-YYYY')}&`: `fechaInicio=${moment().format('MM-DD-YYYY')}&`;
    const fechaFin = this.fechaFin ? `fechaFin=${moment(this.fechaFin).format('MM-DD-YYYY')}`: `fechaFin=${moment().format('MM-DD-YYYY')}&`;*/
    const aprobado = `aprobado=1&`;
    const limit = this.limit ? `limit=${this.limit}&`:"";
    const offset = `offset=${this.offset}&`;

    const queryParams=`${limit}${offset}${aprobado}${search_nombre_cliente}`;
  
    this._apiService.getData(nombreQuery,queryParams).
    subscribe((response) => {
      this.dataSource = response.rows;
      this.items_totales = response.count;
     },
     error=>{
       console.log(error);
     }
     );
  }

  pageChange(evt: PageEvent){
    this.limit = evt.pageSize;
    this.offset = evt.pageSize * evt.pageIndex;
    this.getPedido();
    this.dataSource;
  }

  aprobar($event,pedido){
    const nombreQuery =`pedido/${pedido.id}`;

    this._apiService.setData(nombreQuery,{aprobado : 2,estado:"programado"}).
    subscribe((response) => {
      console.log("Esta es la respuesta de la data Funcionando =>", response);
      this.getPedido();
     },
     error=>{
       console.log(error);
       /*this._snackBar.open(`${error.error.error}`,null,{duration: 5 * 1000},
       );*/
     }
     );
  }

  ngOnInit(): void {
    this.getPedido();
    this.dataSource;
  }

}
