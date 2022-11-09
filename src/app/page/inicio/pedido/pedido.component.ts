import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'app/core/api/api.service';
import { ConcretoComponent } from 'app/page/tipo-concreto/concreto/concreto.component';
//import { CrearModalComponent } from 'app/page/usuarios/crear-modal/crear-modal.component';
import moment from 'moment';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {

  dataCliente:any[]=[];
  dataConcreto:any[]=[];
  dataVendedor:any[]=[];
  dataConductor:any[]=[];

  nombreCliente="";
  nombreVendedor="";
  nombreConductor="";
  tipoConcreto="";
  precioConcreto="0";

  pedido$ = new Subject();
  pedido:any;

  pedidoForm = this._formBuilder.group({
    clienteId           : [, []],
    concretoId     : [, []],
    m3           : [, []],
    valor             : [, []],
    plazo_pagos       : [, []],
    direccion : [, []],
    descarga     : [, []],
    fecha_despacho             : [, []],
    hora_cargue       : [, []],
    hora_obra         : [, []],
    vendedoreId          : [, []],
    conductoreId         : [, []],
    estado            : [, []],
    observaciones     : [, []],
  });
  valorPedido: string;
  direccionCliente: any;

  guardarPedido(){
    const nombreQuery ='pedido';
    var dataPedido = this.pedidoForm.value;
    dataPedido.cliente = this.nombreCliente;
    dataPedido.nombre_vendedor = this.nombreVendedor;
    dataPedido.nombre_conductor = this.nombreConductor;
    dataPedido.tipo_concreto = this.tipoConcreto;
    dataPedido.precio_concreto = this.precioConcreto;
    dataPedido.precio_pedido = parseInt(this.precioConcreto) * parseInt(dataPedido.m3);
    dataPedido.fecha_despacho = moment(dataPedido.fecha_despacho,'YYYY-MM-DD').format('MM-DD-YYYY');
    dataPedido.fecha_pago = moment().add(dataPedido.plazo_pagos,'days').format('MM-DD-YYYY');
    dataPedido.hora_cargue = dataPedido.hora_cargue;
    dataPedido.hora_obra = dataPedido.hora_obra;
    dataPedido.aprobado = 1;

    //dataPedido.hora_cargue = moment(dataPedido.hora_cargue).format('hh:mm');
    //dataPedido.hora_obra = moment(dataPedido.hora_obra).format('hh:mm');

    const queryParams=`search:"",orderBy:"id",ordenar:"desc",take:10`;
    const queryProps='id,nombre,fecha,estado,hora_inicio';
  
    this._apiService.setData(nombreQuery,dataPedido).
    subscribe((response) => {
      console.log("Esta es la respuesta de la data Funcionando =>", response);
      this.dialogRef.close({});
     },
     error=>{
       console.log(error);
       this._snackBar.open(`${error.error.error}`,null,{duration: 5 * 1000},
       );
     }
     );
  }

  
  editarPedido(){
    const nombreQuery =`pedido/${this.data.id}`;
    var dataPedido = this.pedidoForm.value;
    dataPedido.cliente = this.nombreCliente;
    dataPedido.nombre_vendedor = this.nombreVendedor;
    dataPedido.nombre_conductor = this.nombreConductor;
    dataPedido.tipo_concreto = this.tipoConcreto;
    dataPedido.precio_concreto = this.precioConcreto;
    dataPedido.precio_pedido = parseInt(this.precioConcreto) * parseInt(dataPedido.m3);
    dataPedido.fecha_despacho = moment(dataPedido.fecha_despacho,'YYYY-MM-DD').format('MM-DD-YYYY');
    dataPedido.fecha_pago = moment().add(dataPedido.plazo_pagos,'days').format('MM-DD-YYYY');
    dataPedido.hora_cargue = dataPedido.hora_cargue;
    dataPedido.hora_obra = dataPedido.hora_obra;
    //dataPedido.aprobado = 1;

    //dataPedido.hora_cargue = moment(dataPedido.hora_cargue).format('hh:mm');
    //dataPedido.hora_obra = moment(dataPedido.hora_obra).format('hh:mm');

    this._apiService.setData(nombreQuery,dataPedido).
    subscribe((response) => {
      console.log("Esta es la respuesta de la data Funcionando =>", response);
      this.dialogRef.close({});
     },
     error=>{
       console.log(error);
       this._snackBar.open(`${error.error.error}`,null,{duration: 5 * 1000},
       );
     }
     );
  }

  buscarClientes(){
    this.getClientes();
    this.dataCliente;
  }

  setNombreConductor(_nombreConductor){
    this.nombreConductor = `${_nombreConductor}`;
  }

  setNombreVendedor(_nombreVendedor){
    this.nombreVendedor = `${_nombreVendedor}`;
    console.log("Este es el nombre del vendedor =>", _nombreVendedor);
  }

  setValorPedido($event=null){
    this.valorPedido = `${this.pedidoForm.value.m3*parseInt(this.precioConcreto)}`;
    this.pedidoForm.get("valor").patchValue(this.valorPedido);
  }

  setNombreConcreto(_concreto){
    this.tipoConcreto = `${_concreto.nombre}`;
    this.precioConcreto = `${_concreto.precio}`;
    this.setValorPedido();
    this.valorPedido;
  }

  setNombreCliente(_cliente){
    this.nombreCliente = `${_cliente.nombre}`;
    this.direccionCliente = _cliente.direccion;
    this.pedidoForm.get("direccion").patchValue(this.direccionCliente);
  }

  getConcretos(){
    const nombreQuery ='concreto';
    const queryParams=``;
  
    this._apiService.getData(nombreQuery,queryParams).
    subscribe((response) => {
      console.log("Esta es la respuesta de la data =>", response);
      //this.concreto$.next(response);
      this.dataConcreto = response.rows;
     },
     error=>{
       console.log(error);
     }
     );
  }

  getVendedor(){
    const nombreQuery ='vendedor';

    const queryParams=``;
  
    this._apiService.getData(nombreQuery,queryParams).
    subscribe((response) => {
      console.log("Esta es la respuesta de la data =>", response);
      //this.concreto$.next(response);
      this.dataVendedor = response.rows;
     },
     error=>{
       console.log(error);
     }
     );
  }

  getClientes(){
    const data = this.pedidoForm.value;
    const nombreQuery ='cliente';
    const limit = 20 ? `limit=${20}&`:"";
    const search_nombre = data.cliente ? `search_nombre=${data.cliente}`:"";
    const queryParams=`${search_nombre}`;

    this._apiService.getData(nombreQuery,queryParams).
    subscribe((response) => {
      console.log("Esta es la respuesta de la data =>", response);
      this.dataCliente=response.rows;
      //this.concreto$.next(response);
     },
     error=>{
       console.log(error);
     }
     );
  }

  
  getConductor(){
    const nombreQuery ='conductor';
    const queryParams=``;
  
    this._apiService.getData(nombreQuery,queryParams).
    subscribe((response) => {
      console.log("Esta es la respuesta de la data =>", response);
      //this.concreto$.next(response);
      this.dataConductor = response.rows;
     },
     error=>{
       console.log(error);
     }
     );
  }

  
  getPedido(){
    const nombreQuery =`pedido/${this.data.id}`;
    const queryParams=``;
  
    this._apiService.getData(nombreQuery,queryParams).
    subscribe((response) => {
      //this.dataSource = response.rows;
      //this.items_totales = response.count;
      console.log("Este es el pedido a editar =>",response);
      this.pedido$.next(response);
      this.setPedidoForm();

      this.nombreConductor = this.dataConductor.filter((data)=>{return data.id==response.conductoreId}).shift().nombre;
      this.nombreVendedor = this.dataVendedor.filter((data)=>{return data.id==response.vendedoreId}).shift().nombre;
      this.nombreCliente = this.dataCliente.filter((data)=>{return data.id==response.clienteId}).shift().nombre;
     },
     error=>{
       console.log(error);
     }
     );
  }

  setPedidoForm(){
    var pedido = {
      fecha_despacho: moment(this.pedido.fecha_despacho,'MM-DD-YYYY').format('YYYY-MM-DD'),
      tipo_concreto:this.pedido.tipo_concreto,
      hora_cargue:this.pedido.hora_cargue,
      m3:this.pedido.m3,
      hora_obra:this.pedido.hora_obra,
      valor:this.pedido.credito.valor,
      //plazo_pagos:moment().diff(moment(this.pedido.credito.fecha_pago,'MM-DD-YYYY'),'days'),
      plazo_pagos:moment(this.pedido.credito.fecha_pago,'MM-DD-YYYY').diff(moment(),'days'),
      direccion:this.pedido.direccion,
      estado:this.pedido.estado,
      descarga:this.pedido.descarga,
      observaciones:this.pedido.observaciones,
      vendedoreId:this.pedido.vendedoreId,
      conductoreId:this.pedido.conductoreId,
      concretoId:this.pedido.concretoId,
      clienteId:this.pedido.clienteId,
    }

    console.log("El valor precargado =>", pedido);

    this.pedidoForm.patchValue(pedido);
  }

  getFechaEvento(){
    if (this.data.fechaEvento) {
      this.pedidoForm.patchValue({fecha_despacho: moment(this.data.fechaEvento,'YYYY-MM-DD').format('YYYY-MM-DD')});
    }
  }

  
  crearCliente() {
    /*const dialogRef = this._dialog.open(CrearModalComponent, {
      minWidth: '500px',
      maxWidth: '500px',
      maxHeight: '700px',
      panelClass: "crear-modal",
      data:{
        tipo:"clientes"
      }
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      
    });*/
  }

  crearConductor() {
    /*const dialogRef = this._dialog.open(CrearModalComponent, {
      minWidth: '500px',
      maxWidth: '500px',
      maxHeight: '700px',
      panelClass: "crear-modal",
      data:{
        tipo:"conductores"
      }
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      
    });*/
  }

  crearVendedor() {
    /*const dialogRef = this._dialog.open(CrearModalComponent, {
      minWidth: '500px',
      maxWidth: '500px',
      maxHeight: '700px',
      panelClass: "crear-modal",
      data:{
        tipo:"vendedores"
      }
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      
    });*/
  }


  crearConcreto() {
    const dialogRef = this._dialog.open(ConcretoComponent, {
      minWidth: '500px',
      maxWidth: '500px',
      maxHeight: '700px',
      panelClass: "crear-modal"
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {});
  }



  constructor(private _formBuilder: FormBuilder, public _dialog: MatDialog, private _apiService: ApiService, public dialogRef: MatDialogRef<PedidoComponent>,private _snackBar: MatSnackBar,@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
    this.getClientes();
    this.dataCliente;

    this.getConcretos();
    this.dataConcreto;

    this.getVendedor();
    this.dataVendedor;

    this.getConductor();
    this.dataConductor;

    this.getFechaEvento();

    this.pedido$.subscribe((data)=>{
      this.pedido = data;
    });

    if (this.data.id) {
      this.getPedido();
    }
  }

}
