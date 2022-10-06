import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { ApiService } from 'app/core/api/api.service';
import { CambiarEstadoComponent } from 'app/page/despachos/cambiar-estado/cambiar-estado.component';
import { ConcretoComponent } from 'app/page/tipo-concreto/concreto/concreto.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-lista-vendedores',
  templateUrl: './lista-vendedores.component.html',
  styleUrls: ['./lista-vendedores.component.scss']
})
export class ListaVendedoresComponent implements OnInit {
  concreto$ = new Subject();
  concreto:any=[];
  search_nombre="";
  limit=10;
  offset=0;
  items_totales=0;
  pagina = 1;

  displayedColumns: string[] = ['id','nombre', 'telefono','tipo_documento','documento','acciones'];

  filtroPedidoForm = this._formBuilder.group({
    nombre     : [, []],
    telefono     : [, []]
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
    this.getVendedor();
  }

  searchNombre(){
    this.search_nombre = this.filtroPedidoForm.value.cliente;
    this.getVendedor();
  }

  filtraRole(evt){
    this.getVendedor();
  }

  getVendedor(){
    const data = this.filtroPedidoForm.value;
    console.log("Esta es es la data =>", data);
    const nombreQuery ='vendedor';
    const search_nombre = data.nombre ? `search_nombre=${data.nombre}&`:"";
    const search_telefono = data.telefono ? `search_telefono=${data.telefono}&`:"";
    const role = this.filtroPedidoForm.value.role ? `role=${this.filtroPedidoForm.value.role}&`:"";
    const limit = this.limit ? `limit=${this.limit}&`:"";
    const offset = `offset=${this.offset}`;

    const queryParams=`${search_nombre}${search_telefono}${role}${limit}${offset}`;
  
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
      this.getVendedor();
    });
  }

  deleteUser(_id){
    const nombreQuery ='user';
    const idData = _id;
    
  
    this._apiService.deleteData(nombreQuery,idData).
    subscribe((response) => {
      console.log("Esta es la respuesta de la data =>", response);
      this.getVendedor();
     },
     error=>{
       console.log(error);
     }
     );
  }

  irCrear() {
    this._router.navigate([`/usuarios/crear/vendedores`]);
  }

  irEditar(element) {
    this._router.navigate([`/usuarios/editar/vendedores/${element.user.id}`]);
  }

  constructor(private _formBuilder: FormBuilder,public _dialog: MatDialog, private _apiService: ApiService, private _fuseMediaWatcherService: FuseMediaWatcherService,private _changeDetectorRef: ChangeDetectorRef,private _router:Router) { }

  ngOnInit(): void {
    this.concreto$.subscribe(data=>this.concreto=data);
    this.getVendedor();
  }

}
