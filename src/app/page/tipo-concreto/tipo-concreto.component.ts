import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ApiService } from 'app/core/api/api.service';
import { Subject } from 'rxjs';
import { CambiarEstadoComponent } from '../despachos/cambiar-estado/cambiar-estado.component';
import { ConcretoComponent } from './concreto/concreto.component';


@Component({
  selector: 'app-tipo-concreto',
  templateUrl: './tipo-concreto.component.html',
  styleUrls: ['./tipo-concreto.component.scss']
})
export class TipoConcretoComponent implements OnInit {

  concreto$ = new Subject();
  concreto:any=[];
  search_nombre="";
  limit=10;
  offset=0;
  items_totales=0;
  pagina = 1;

  displayedColumns: string[] = ['id','nombre', 'unidad_medida', 'precio', 'acciones'];

  filtroPedidoForm = this._formBuilder.group({
    cliente     : [, []]
  });

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
    this.getConcretos();
  }

  searchNombre(){
    this.search_nombre = this.filtroPedidoForm.value.cliente;
    this.getConcretos();
  }

  getConcretos(){
    const nombreQuery ='concreto';
    const search_nombre = this.search_nombre ? `search_nombre=${this.search_nombre}&`:"";
    const limit = this.limit ? `limit=${this.limit}&`:"";
    const offset = `offset=${this.offset}`;

    const queryParams=`${limit}${search_nombre}${offset}`;
  
    this._apiService.getData(nombreQuery,queryParams).
    subscribe((response) => {
      console.log("Esta es la respuesta de la data =>", response);
      this.concreto$.next(response.rows);
      this.items_totales = response.count;
     },
     error=>{
       console.log(error);
     }
     );
  }

  concretoModal(){
    const dialogRef = this._dialog.open(ConcretoComponent, {
      minWidth: '500px',
      data:{}
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      this.getConcretos();
    });
  }

  editarConcretoModal(elemento){
    const dialogRef = this._dialog.open(ConcretoComponent, {
      minWidth: '500px',
      data:{
        creditoId:elemento.id
      }
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      this.getConcretos();
    });
  }

  deleteConcretos(_id){
    const nombreQuery ='concreto';
    const idData = _id;
  
    this._apiService.deleteData(nombreQuery,idData).
    subscribe((response) => {
      console.log("Esta es la respuesta de la data =>", response);
      this.getConcretos();
     },
     error=>{
       console.log(error);
     }
     );
  }

  constructor(private _formBuilder: FormBuilder,public _dialog: MatDialog, private _apiService: ApiService) { }

  ngOnInit(): void {
    this.concreto$.subscribe(data=>this.concreto=data);

    this.getConcretos();
  }

}
