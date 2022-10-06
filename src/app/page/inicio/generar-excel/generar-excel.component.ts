import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from 'app/core/api/api.service';
import moment from 'moment';
import FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet; charset=UTF-8';
const EXCEL_EXT = '.xlsx';

@Component({
  selector: 'app-generar-excel',
  templateUrl: './generar-excel.component.html',
  styleUrls: ['./generar-excel.component.scss']
})
export class GenerarExcelComponent implements OnInit {

  fechaInicio="";
  fechaFin="";

  filtroPedidoForm = this._formBuilder.group({
    fecha1     : [, []],
    fecha2     : [, []],
  });

  formatearValores(valores:Array<any>){
    var valoresExcel:any[]=[];
    valores.map((data)=>{
      valoresExcel.push({
        'Id': data.id,
        'Cliente':data.cliente,
        'Tipo descarga':data.descarga,
        'Vendedor':data.vendedor,
        'Dirección':data.direccion,
        'm³':data.m3,
        'Observaciones':data.observaciones,
        'Fecha despacho':data.fecha_despacho,
        'Hora cargue':data.hora_cargue,
        'Hora en obra':data.hora_obra,
        'Tipo de concreto':data.tipo_concreto
      });
    });

    return valoresExcel;
  }

  
  getPedido(){
    const data = this.filtroPedidoForm.value;
    const nombreQuery ='pedido';
    const fechaInicio = this.fechaInicio ? `fechaInicio=${moment(this.fechaInicio).format('MM-DD-YYYY')}&`: `fechaInicio=${moment().format('MM-DD-YYYY')}&`;
    const fechaFin = this.fechaFin ? `fechaFin=${moment(this.fechaFin).format('MM-DD-YYYY')}`: `fechaFin=${moment().format('MM-DD-YYYY')}&`;

    const queryParams=`${fechaInicio}${fechaFin}`;
  
    this._apiService.getData(nombreQuery,queryParams).
    subscribe((response) => {
      this.exportToExcel(this.formatearValores(response.rows),'pedidos');
      console.log("Respuesta para convertir en Excel =>", response);
     },
     error=>{
       console.log(error);
     }
     );
  }

  cambioFechas(){
    var data = this.filtroPedidoForm.value;
    this.fechaInicio = moment(data.fecha1).format('MM-DD-YYYY');
    this.fechaInicio = moment(data.fecha2).format('MM-DD-YYYY');
  }

  exportToExcel(json:any[], excelFileName:String){
    const worksheet : XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook : XLSX.WorkBook = { Sheets:{'data':worksheet}, SheetNames:['data'] };
    const excelBuffer: any = XLSX.write(workbook,{bookType:'xlsx', type:'array'});
    this.saveAsExcel(excelBuffer,excelFileName);
  }

  saveAsExcel(buffer:any, fileName:String){
    const data: Blob = new Blob([buffer],{type:EXCEL_TYPE});
    FileSaver.saveAs(data, fileName+"_"+moment().format('YYYY-MM-DD_HH_mm_ss')+".xlsx");
  }

  generarExcel(){
    this.getPedido();
  }

  constructor(private _formBuilder: FormBuilder, private _apiService: ApiService) { }

  ngOnInit(): void {
  }

}
