import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from 'app/core/api/api.service';
import moment from 'moment';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.scss']
})
export class EstadisticasComponent implements OnInit {
    // options
    showXAxis: boolean = true;
    showYAxis: boolean = true;
    gradient: boolean = false;
    showLegend: boolean = true;
    showXAxisLabel: boolean = true;
    yAxisLabel: string = 'Conductor';
    yAxisLabel2: string = 'Descarga';
    showYAxisLabel: boolean = true;
    xAxisLabel: string = 'M³';

    despachos$ = new Subject();
    pagados$ = new Subject();
    conductores$ = new Subject();
    descargas$ = new Subject();

    despachados:any;
    pagados:any;
    conductores:any;
    descargas:any;

  view: any[] = [700, 400];
  showLabels: boolean = true;
  isDoughnut: boolean = false;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  filtroEstadisticasForm = this._formBuilder.group({
    fecha1     : [, []],
    fecha2     : [, []]
  });
  fechaInicio: any;
  fechaFin: any;

  search($event){
    console.log("Está haciendo la actualización.");
    const data = this.filtroEstadisticasForm.value;
    this.fechaInicio = data.fecha1;
    this.fechaFin = data.fecha2;
    this.getDespachados();
    this.getPagados();
    this.getConductores();
    this.getDescargas();
  }

  constructor(private _apiService: ApiService,private _formBuilder: FormBuilder) {
    //Object.assign(this, { single });
  }

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  getDespachados(){
    const nombreQuery ='extras-despachos';
    const fechaInicio = this.fechaInicio ? `fechaInicio=${moment(this.fechaInicio).format('MM-DD-YYYY')}&`: `fechaInicio=${moment().format('MM-DD-YYYY')}&`;
    const fechaFin = this.fechaFin ? `fechaFin=${moment(this.fechaFin).format('MM-DD-YYYY')}`: `fechaFin=${moment().format('MM-DD-YYYY')}&`;

    const queryParams=`${fechaInicio}${fechaFin}`;
  
    this._apiService.getData(nombreQuery,queryParams).
    subscribe((response) => {
      console.log("Esta es la respuesta de la data =>", response);
      this.despachos$.next(response);
     },
     error=>{
       console.log(error);
     }
     );
  }

  getPagados(){
    const nombreQuery ='extras-pagados';
    const fechaInicio = this.fechaInicio ? `fechaInicio=${moment(this.fechaInicio).format('MM-DD-YYYY')}&`: `fechaInicio=${moment().format('MM-DD-YYYY')}&`;
    const fechaFin = this.fechaFin ? `fechaFin=${moment(this.fechaFin).format('MM-DD-YYYY')}`: `fechaFin=${moment().format('MM-DD-YYYY')}&`;

    const queryParams=`${fechaInicio}${fechaFin}`;
  
    this._apiService.getData(nombreQuery,queryParams).
    subscribe((response) => {
      console.log("Esta es la respuesta de la data =>", response);
      this.pagados$.next(response);
     },
     error=>{
       console.log(error);
     }
     );
  }

  getConductores(){
    const nombreQuery ='extras-conductores';
    const fechaInicio = this.fechaInicio ? `fechaInicio=${moment(this.fechaInicio).format('MM-DD-YYYY')}&`: `fechaInicio=${moment().format('MM-DD-YYYY')}&`;
    const fechaFin = this.fechaFin ? `fechaFin=${moment(this.fechaFin).format('MM-DD-YYYY')}`: `fechaFin=${moment().format('MM-DD-YYYY')}&`;

    const queryParams=`${fechaInicio}${fechaFin}`;
  
    this._apiService.getData(nombreQuery,queryParams).
    subscribe((response) => {
      console.log("Esta es la respuesta de la data de los conductores es =>", response);
      this.conductores$.next(response);
     },
     error=>{
       console.log(error);
     }
     );
  }

  getDescargas(){
    const nombreQuery ='extras-descargas';
    const fechaInicio = this.fechaInicio ? `fechaInicio=${moment(this.fechaInicio).format('MM-DD-YYYY')}&`: `fechaInicio=${moment().format('MM-DD-YYYY')}&`;
    const fechaFin = this.fechaFin ? `fechaFin=${moment(this.fechaFin).format('MM-DD-YYYY')}`: `fechaFin=${moment().format('MM-DD-YYYY')}&`;

    const queryParams=`${fechaInicio}${fechaFin}`;
  
    this._apiService.getData(nombreQuery,queryParams).
    subscribe((response) => {
      console.log("Esta es la respuesta de la data de los conductores es =>", response);
      this.descargas$.next(response);
     },
     error=>{
       console.log(error);
     }
     );
  }


  ngOnInit(): void {
    this.despachos$.subscribe((data)=>{
      this.despachados = data;
    });

    this.pagados$.subscribe((data)=>{
      this.pagados = data;
    });

    this.conductores$.subscribe((data)=>{
      this.conductores = data;
    });

    this.descargas$.subscribe((data)=>{
      this.descargas = data;
    });

    this.getDespachados();
    this.getPagados();
    this.getConductores();
    this.getDescargas();
  }

}
