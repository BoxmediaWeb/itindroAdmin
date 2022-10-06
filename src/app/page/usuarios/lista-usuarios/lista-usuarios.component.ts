import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { ApiService } from 'app/core/api/api.service';
import { CambiarEstadoComponent } from 'app/page/despachos/cambiar-estado/cambiar-estado.component';
import { ConcretoComponent } from 'app/page/tipo-concreto/concreto/concreto.component';
import { environment } from 'environments/environment';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {


  concreto$ = new Subject();
  concreto:any=[];
  search_nombre="";
  limit=10;
  offset=0;
  items_totales=0;
  pagina = 1;

  displayedColumns: string[] = ['id','avatar','name', 'nick','email', 'status','acciones'];

  filtroPedidoForm = this._formBuilder.group({
    cliente     : [, []],
    role     : [, []],
    email     : [, []]
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
    this.getUsuarios();
  }

  searchNombre(){
    this.search_nombre = this.filtroPedidoForm.value.cliente;
    this.getUsuarios();
  }

  filtraRole(evt){
    this.getUsuarios();
  }


  getUsuarios(){
    const data = this.filtroPedidoForm.value;
    const nombreQuery ='user';
    const search_nombre = this.search_nombre ? `search_nombre=${this.search_nombre}&`:"";
    const search_correo = data.email ? `search_correo=${data.email}&`:"";
    const role = this.filtroPedidoForm.value.role ? `role=${this.filtroPedidoForm.value.role}&`:"";
    const limit = this.limit ? `limit=${this.limit}&`:"";
    const offset = `offset=${this.offset}`;

    const queryParams=`${search_nombre}${search_correo}${role}${limit}${offset}`;
  
    this._apiService.getData(nombreQuery,queryParams).
    subscribe((response) => {
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
      this.getUsuarios();
    });
  }

  deleteUser(_id){
    const nombreQuery ='user';
    const idData = _id;
    
  
    this._apiService.deleteData(nombreQuery,idData).
    subscribe((response) => {
      console.log("Esta es la respuesta de la data =>", response);
      this.getUsuarios();
     },
     error=>{
       console.log(error);
     }
     );
  }

  irCrear() {
    this._router.navigate([`/usuarios/crear/usuarios`]);
  }

  irEditar(element) {
    var tipoRuta:string;

    switch (element.role) {
      case 'conductor':
        tipoRuta = "conductores"
        break;

      case 'cliente':
        tipoRuta = "clientes"
        break;

      case 'vendedor':
        tipoRuta = "vendedores"
        break;

    }

    this._router.navigate([`/usuarios/editar/${tipoRuta}/${element.id}`]);
  }

  getImgAvatar(avatar):string{
    return `${environment.serverUrl}/images/avatars/${avatar}`;
  }

  /*getAvatar(nombreAvatar){
    return `${environment.serverUrl}/assets/images/avatars/${nombreAvatar}`;
  }*/

  constructor(private _formBuilder: FormBuilder,public _dialog: MatDialog, private _apiService: ApiService, private _fuseMediaWatcherService: FuseMediaWatcherService,private _changeDetectorRef: ChangeDetectorRef,private _router:Router) { }

  ngOnInit(): void {
    console.log("Cargó el inicio de los usuarios");
    this.concreto$.subscribe(data=>this.concreto=data);
    this.getUsuarios();
    this.items_totales;
  }

}
