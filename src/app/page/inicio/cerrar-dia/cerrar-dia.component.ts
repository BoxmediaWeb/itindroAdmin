import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from 'app/core/api/api.service';
import moment from 'moment';


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
  selector: 'app-cerrar-dia',
  templateUrl: './cerrar-dia.component.html',
  styleUrls: ['./cerrar-dia.component.scss']
})
export class CerrarDiaComponent implements OnInit {

  displayedColumns: string[] = ['fecha', 'hora_inicio', 'hora_fin', 'acciones'];
  dataSource:any[]=[];

  limit=10;
  offset=0;

  cerrarForm = this._formBuilder.group({
    fecha           : [, []],
    hora_inicio     : [, []],
    hora_fin        : [, []],
  });

  constructor(private _formBuilder: FormBuilder,private _apiService: ApiService) { }


    
  getCierres(){
    const nombreQuery ='cierre';
    const limit = this.limit ? `limit=${this.limit}&`:"";
    const offset = `offset=${this.offset}`;

    const queryParams=`${limit}${offset}`;
  
    this._apiService.getData(nombreQuery,queryParams).
    subscribe((response) => {
      console.log("Esta es la respuesta de la data =>", response);
      this.dataSource = response;
     },
     error=>{
       console.log(error);
     }
     );
  }

  guardarCierre(){
    const nombreQuery ='cierre';
    var dataCierre = this.cerrarForm.value;
    dataCierre.fecha =  moment(dataCierre.fecha).format('MM-DD-YYYY');

    const queryParams=`search:"",orderBy:"id",ordenar:"desc",take:10`;
    const queryProps='id,nombre,fecha,estado,hora_inicio';
  
    this._apiService.setData(nombreQuery,dataCierre).
    subscribe((response) => {
      console.log("Esta es la respuesta de la data =>", response);
      this.getCierres();
      this.dataSource;
      this.cerrarForm.reset();
      //this.dialogRef.close({});
     },
     error=>{
       console.log(error);
     }
     );
  }

  ngOnInit(): void {
    this.getCierres();
    this.dataSource;
  }

}
