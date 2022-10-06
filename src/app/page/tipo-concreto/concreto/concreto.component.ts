import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'app/core/api/api.service';

@Component({
  selector: 'app-concreto',
  templateUrl: './concreto.component.html',
  styleUrls: ['./concreto.component.scss']
})
export class ConcretoComponent implements OnInit {

  filtroPedidoForm = this._formBuilder.group({
    nombre       : [, []],
    precio       : [, []],
    unidad_medida       : [, []]
  });
  concreto: any;

  guardarConcreto(){
    if (this.data.creditoId) {
      this.setConcretoId();
    }else{
      this.setConcretos();
    }
  }

  setConcretos(){
    const nombreQuery ='concreto';
    const dataConcreto = this.filtroPedidoForm.value;

    this._apiService.setData(nombreQuery,dataConcreto).
    subscribe((response) => {
      console.log("Esta es la respuesta de la data =>", response);
      this.cerrarModal();
     },
     error=>{
       console.log(error);
     }
     );
  }

  setConcretoId(){
    const nombreQuery =`concreto/${this.data.creditoId}`;
    const dataConcreto = this.filtroPedidoForm.value;

    this._apiService.setData(nombreQuery,dataConcreto).
    subscribe((response) => {
      console.log("Esta es la respuesta de la data =>", response);
      this.cerrarModal();
     },
     error=>{
       console.log(error);
     }
    );
  }
  
  getConcreto(){
    const nombreQuery =`concreto/${this.data.creditoId}`;
    
    const queryParams=``;
  
    this._apiService.getData(nombreQuery,queryParams).
    subscribe((response) => {
      this.concreto=response;

      var concretoValues = {
        nombre:response.nombre,
        precio:response.precio,
        unidad_medida:response.unidad_medida
      }

      this.filtroPedidoForm.setValue(concretoValues);
     },
     error=>{
       console.log(error);
     }
     );
  }

  cerrarModal(){
    this.dialogRef.close({});
  }

  constructor(private _formBuilder: FormBuilder, private _apiService: ApiService,public dialogRef: MatDialogRef<ConcretoComponent>,@Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {
    if (this.data.creditoId) {
      this.getConcreto();
      this.concreto;
    }
  }

}
