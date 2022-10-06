import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'app/core/api/api.service';
import { Subject } from 'rxjs';
import { RecortarImagenComponent } from '../recortar-imagen/recortar-imagen.component';

@Component({
  selector: 'app-crear-modal',
  templateUrl: './crear-modal.component.html',
  //styleUrls: ['./crear-modal.component.scss']
})
export class CrearModalComponent implements OnInit {

  fileTemp:any;
  imagenRecortada:any;
  tipo:string;
  imagenRecortadaFile: any;
  imagenOriginal: any;
  idEditar: any;
  usuarioSeleccionado:any;
  usuarioSeleccionado$ = new Subject();
  colores = [{bg:"#FFCDD2",text:"#B71C1C"},{bg:"#F8BBD0",text:"#880E4F"},{bg:"#E1BEE7",text:"#4A148C"},{bg:"#C5CAE9",text:"#311B92"},{bg:"#C5CAE9",text:"#1A237E"},{bg:"#BBDEFB",text:"#0D47A1"},{bg:"#B3E5FC",text:"#01579B"},{bg:"#B2EBF2",text:"#006064"},{bg:"#B2DFDB",text:"#004D40"},{bg:"#C8E6C9",text:"#1B5E20"}];


  constructor(private _sanitizer: DomSanitizer, private _formBuilder: FormBuilder,private _route: ActivatedRoute,private _apiService: ApiService,public _dialog: MatDialog,private _router:Router,@Inject(MAT_DIALOG_DATA) public data,public dialogRef: MatDialogRef<CrearModalComponent>) { }

  perfilForm = this._formBuilder.group({
    tipo_documento     : [, [Validators.required]],
    documento     : [, [Validators.required]],
    direccion     : [, [Validators.required]],
    email     : [, [Validators.required]],
    telefono     : [, [Validators.required]],
    nombres     : [, [Validators.required]],
    apellidos     : [, [Validators.required]],
    nickname     : [, [Validators.required]],
    placa     : [, []],
    fecha     : [, [Validators.required]],
    password_1     : [, [Validators.required]],
    password_2     : [, [Validators.required]],
    role : [,[]],
    color : [,[]]
  });

  recortarImagenModal(event) {

    this.imagenOriginal = event.target.files[0];
    console.log("Esta es la imagen original", this.imagenOriginal);

    const dialogRef = this._dialog.open(RecortarImagenComponent, {
      minWidth: '500px',
      data:{
        event
      }
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      this.imagenRecortada = result.imagenRecortada;
      this.imagenRecortadaFile = result.imagenRecortadaFile;
      //this.guardarAvatarUsuario(result.imagenRecortadaFile,'10');
    });
  }
  
  //imgPerfil: any;

  getColorJson(bg,text){
    return `${bg},${text}`
  }

  imgPerfilEvt($event){
    this.recortarImagenModal($event);
  }

  estructurarFormulario(){

    switch (this.tipo) {
      case 'usuarios':
        this.perfilForm.get('role').addValidators(Validators.required);
        //this.businessFormGroup.get('description').clearValidators(); 
        break;
      
      case 'conductores':
        break;
    
      case 'vendedores':
        break;

      case 'clientes':
        break;
    
      default:
        break;
    }

  }

  dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, {type:mime});
}

  guardarAvatarUsuario(file,userId){
    const nombreQuery = "avatar-usuario";
    var body = new FormData();

    console.log("Este es el evento file =>", file);

    var fileConvertido : File = new File([file], this.imagenOriginal.name);

    body.append('userId',userId);
    body.append('imgAvatar',fileConvertido);//El archivo debe estar de último https://medium.com/@muh__hizbullah/multer-req-body-null-object-when-send-file-with-other-field-string-using-formdata-b275b4364404
    this._apiService.setFile(nombreQuery,body).subscribe((res)=>{
      console.log("Esta es la respuesta devuelta por el servidor =>", res);
      this.dialogRef.close({});
    });
  }

  guardarUsuario(){
    const nombreQuery ='user';
    var dataUsuario = this.perfilForm.value;

    if(this.tipo!='usuarios'){
      dataUsuario.role = this.tipo == 'clientes' ? 'cliente' : this.tipo == 'vendedores' ? 'vendedor': this.tipo == 'conductores' ? 'conductor' : '';
    }

    const queryParams=`search:"",orderBy:"id",ordenar:"desc",take:10`;
    const queryProps='id,nombre,fecha,estado,hora_inicio';
  
    this._apiService.setData(nombreQuery,dataUsuario).
    subscribe((response) => {

      if(this.imagenRecortadaFile){
        this.guardarAvatarUsuario(this.imagenRecortadaFile,response.id);
      }else{
        this.dialogRef.close({});
      }


     },
     error=>{
       console.log(error);
     }
     );
  }

  valoresCliente(){
    var usuariosValores = {
      nombres:this.usuarioSeleccionado.name?this.usuarioSeleccionado.name.split(' ')[0]:"",
      apellidos:this.usuarioSeleccionado.name?this.usuarioSeleccionado.name.split(' ')[1]:"",
      tipo_documento:this.usuarioSeleccionado.cliente.tipo_documento?this.usuarioSeleccionado.cliente.tipo_documento:"",
      documento:this.usuarioSeleccionado.cliente.documento?this.usuarioSeleccionado.cliente.documento:"",
      fecha:this.usuarioSeleccionado.cliente.fecha? this.usuarioSeleccionado.cliente.fecha:"",
      nickname:this.usuarioSeleccionado.nick?this.usuarioSeleccionado.nick:"",
      color:this.usuarioSeleccionado.cliente.color?this.usuarioSeleccionado.cliente.color:"",
      direccion:this.usuarioSeleccionado.cliente.direccion?this.usuarioSeleccionado.cliente.direccion:"",
      email:this.usuarioSeleccionado.email?this.usuarioSeleccionado.email:"",
      telefono:this.usuarioSeleccionado.cliente.telefono?this.usuarioSeleccionado.cliente.telefono:"",
      password_1:this.usuarioSeleccionado.password?this.usuarioSeleccionado.password:"",
      password_2:this.usuarioSeleccionado.password?this.usuarioSeleccionado.password:"",
    };

    this.perfilForm.patchValue(usuariosValores);
  }

  valoresConductor(){
    var usuariosValores = {
      nombres:this.usuarioSeleccionado.name?this.usuarioSeleccionado.name:"",
      apellidos:this.usuarioSeleccionado.name?this.usuarioSeleccionado.name:"",
      tipo_documento:this.usuarioSeleccionado.conductore.tipo_documento?this.usuarioSeleccionado.conductore.tipo_documento:"",
      documento:this.usuarioSeleccionado.conductore.documento?this.usuarioSeleccionado.conductore.documento:"",
      fecha:this.usuarioSeleccionado.conductore.fecha?this.usuarioSeleccionado.conductore.fecha:"",
      nickname:this.usuarioSeleccionado.nick?this.usuarioSeleccionado.nick:"",
      placa:"",
      role:"",
      direccion:this.usuarioSeleccionado.conductore.direccion?this.usuarioSeleccionado.conductore.direccion:"",
      email:this.usuarioSeleccionado.email?this.usuarioSeleccionado.email:"",
      telefono:this.usuarioSeleccionado.conductore.telefono?this.usuarioSeleccionado.conductore.telefono:"",
      password_1:this.usuarioSeleccionado.password?this.usuarioSeleccionado.password:"",
      password_2:this.usuarioSeleccionado.password?this.usuarioSeleccionado.password:"",
    };

    this.perfilForm.patchValue(usuariosValores);
  }


  valoresVendedor(){
    var usuariosValores = {
      nombres:this.usuarioSeleccionado.name?this.usuarioSeleccionado.name:"",
      apellidos:this.usuarioSeleccionado.name?this.usuarioSeleccionado.name:"",
      tipo_documento:this.usuarioSeleccionado.vendedore.tipo_documento?this.usuarioSeleccionado.vendedore.tipo_documento:"",
      documento:this.usuarioSeleccionado.vendedore.documento?this.usuarioSeleccionado.vendedore.documento:"",
      fecha:this.usuarioSeleccionado.vendedore.fecha?this.usuarioSeleccionado.vendedore.fecha:"",
      nickname:this.usuarioSeleccionado.nick?this.usuarioSeleccionado.nick:"",
      placa:"",
      role:"",
      direccion:this.usuarioSeleccionado.vendedore.direccion?this.usuarioSeleccionado.vendedore.direccion:"",
      email:this.usuarioSeleccionado.email?this.usuarioSeleccionado.email:"",
      telefono:this.usuarioSeleccionado.vendedore.telefono?this.usuarioSeleccionado.vendedore.telefono:"",
      password_1:this.usuarioSeleccionado.password?this.usuarioSeleccionado.password:"",
      password_2:this.usuarioSeleccionado.password?this.usuarioSeleccionado.password:"",
    };

    this.perfilForm.patchValue(usuariosValores);
  }

  getUsuario(){
    const nombreQuery =`user/${this.idEditar}`;
    const tipo = this.tipo ? `tipo=${this.tipo}`:"";

    const queryParams=`${tipo}`;
  
    this._apiService.getData(nombreQuery,queryParams).
    subscribe((response) => {
      console.log("Estos es el usuario seleccionado =>", response);

      this.usuarioSeleccionado$.next(response);

      if (this.tipo == "clientes") {
        this.valoresCliente();
      }

      if (this.tipo == "conductores") {
        this.valoresConductor();
      }

      if (this.tipo == "vendedores") {
        this.valoresVendedor();
      }

      //this.perfilForm.setValue(usuariosValues);
     },
     error=>{
       console.log(error);
     }
     );
  }


  editarUsuario(){
    const nombreQuery =`user/${this.idEditar}`;
    var dataUsuario = this.perfilForm.value;

    if(this.tipo!='usuarios'){
      dataUsuario.role = this.tipo == 'clientes' ? 'cliente' : this.tipo == 'vendedores' ? 'vendedor': this.tipo == 'conductores' ? 'conductor' : '';
    }
  
    this._apiService.setData(nombreQuery,dataUsuario).
    subscribe((response) => {

      /*if(this.imagenRecortadaFile){
        this.guardarAvatarUsuario(this.imagenRecortadaFile,response.id);
      }*/
      
     },
     error=>{
       console.log(error);
     }
     );
  }

  ngOnInit(): void {
    //this._route.parent.snapshot.paramMap.get('tipo');

    this.usuarioSeleccionado$.subscribe((data)=>{
      this.usuarioSeleccionado = data;
    });

    this.tipo=this.data.tipo;
    this.getUsuario();

    /*this._route.params.subscribe(
      (params)=>{
        this.tipo = params['tipo'];
        this.idEditar = params['id'];
      });*/

  }

}
