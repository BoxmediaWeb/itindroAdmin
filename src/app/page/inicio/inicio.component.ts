import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'app/core/api/api.service';
import { CerrarDiaComponent } from './cerrar-dia/cerrar-dia.component';
import { GenerarExcelComponent } from './generar-excel/generar-excel.component';
import { PedidoComponent } from './pedido/pedido.component';
import moment from 'moment';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subject } from 'rxjs';
//import { CrearModalComponent } from '../usuarios/crear-modal/crear-modal.component';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA = [
  {
    cliente: 'Fernando',
    fecha_despacho: '12/12/2022',
    hora_cargue: '12:am',
    hora_obra: '12:am',
    ult_actualizacion: '12/12/2022',
    direccion: 'Cll 6 #4-27',
    observaciones: "Bla bla bla bla",
    descarga: 'fsdf',
    concreto: 'Primer',
    precio_concreto: 5000,
    m3: '300',
    precio_pedido: '100000',
    vendedor: 'Diego Medina',
    conductor: 'Carlos Pérez',
    estado: 1
  },
];

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})

export class InicioComponent implements OnInit {
  limit=10;
  offset=0;
  items_totales=0;
  pagina = 1;
  fechaInicio = "";
  fechaFin="";

  contadores$ = new Subject();

  displayedColumns2: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['cliente', 'fecha_despacho', 'hora_cargue', 'hora_obra', 'ult_actualizacion', 'direccion', 'observaciones', 'descarga', 'concreto', 'precio_concreto', 'm3', 'precio_pedido', 'vendedor', 'conductor', 'estado', 'acciones'];
  dataSource:any[]=[];


  filtroPedidoForm = this._formBuilder.group({
    fecha1     : [, []],
    fecha2     : [, []],
    cliente     : [, []]
  });
  contadores: any;

  pageChange(evt: PageEvent){
    this.limit = evt.pageSize;
    this.offset = evt.pageSize * evt.pageIndex;
    this.getPedido();
    this.dataSource;
  }

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
      maxWidth: '500px',
      maxHeight: '700px',
      data:{}
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {});
  }

  pedidoModal(elemento=null) {
    const dialogRef = this._dialog.open(PedidoComponent, {
      minWidth: '500px',
      data:{
        id:elemento?.id
      }
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      this.getPedido();
      this.dataSource;
    });
  }

  /*searchNombreCliente(){
    this.getPedido();
  }*/

  search($event){
    console.log("Está haciendo la actualización.");
    const data = this.filtroPedidoForm.value;
    this.fechaInicio = data.fecha1;
    this.fechaFin = data.fecha2;
    this.getPedido();
  }

  getPedido(){
    const data = this.filtroPedidoForm.value;
    const nombreQuery ='pedido';
    const search_nombre_cliente = data.cliente ? `search_nombre_cliente=${data.cliente}`:"";
    const fechaInicio = this.fechaInicio ? `fechaInicio=${moment(this.fechaInicio).format('MM-DD-YYYY')}&`: `fechaInicio=${moment().format('MM-DD-YYYY')}&`;
    const fechaFin = this.fechaFin ? `fechaFin=${moment(this.fechaFin).format('MM-DD-YYYY')}`: `fechaFin=${moment().format('MM-DD-YYYY')}&`;
    const aprobado = `aprobado=2&`;
    const limit = this.limit ? `limit=${this.limit}&`:"";
    const offset = `offset=${this.offset}&`;

    const queryParams=`${limit}${offset}${fechaInicio}${aprobado}${fechaFin}${search_nombre_cliente}`;
  
    this._apiService.getData(nombreQuery,queryParams).
    subscribe((response) => {
      this.dataSource = response.rows;
      this.items_totales = response.count;
      console.log("Esta es la respuesta de la data =>", response);
     },
     error=>{
       console.log(error);
     }
     );
  }

  
  getContadores(){
    const nombreQuery ='extras-contadores';
    const fechaInicio = this.fechaInicio ? `fechaInicio=${moment(this.fechaInicio).format('MM-DD-YYYY')}&`: `fechaInicio=${moment().format('MM-DD-YYYY')}&`;
    const fechaFin = this.fechaFin ? `fechaFin=${moment(this.fechaFin).format('MM-DD-YYYY')}`: `fechaFin=${moment().format('MM-DD-YYYY')}&`;
    const aprobado = `aprobado=2&`;

    const queryParams=`${fechaInicio}${fechaFin}${aprobado}`;
  
    this._apiService.getData(nombreQuery,queryParams).
    subscribe((response) => {
      console.log("Esta es la respuesta de la data de los conductores es =>", response);
      this.contadores$.next(response);
     },
     error=>{
       console.log(error);
     }
     );
  }

  ultAct(fecha){
    return moment().format('YYYY-MM-DD');
  }

  ngOnInit(): void {

    this.contadores$.subscribe((data)=>{
      this.contadores = data;
    });

    this.getContadores();
    this.getPedido();
  }

}
