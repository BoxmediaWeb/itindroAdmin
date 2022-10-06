import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarOptions } from '@fullcalendar/core';
import { ApiService } from 'app/core/api/api.service';
import moment from 'moment';
import { Subject } from 'rxjs';
import { PedidoComponent } from '../inicio/pedido/pedido.component';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent implements OnInit {
  eventos$ = new Subject();
  calendarOptions: CalendarOptions={};
  dataPedido: any;

  constructor(private _apiService: ApiService,public _dialog: MatDialog) { }

  
  getPedido(){

    const nombreQuery ='pedido';
    const queryParams=``;
  
    this._apiService.getData(nombreQuery,queryParams).
    subscribe((response) => {
      var _evts=[];
      this.calendarOptions.events = response.rows.map((evento)=>{
        _evts.push({
          title: evento.cliente,
          date: moment(`${evento.fecha_despacho} ${evento.hora_cargue}`,'MM-DD-YYYY HH:mm').format('YYYY-MM-DD HH:mm'),
          eventOrder:"time",
        });
      });
      console.log("Estos son los eventos mapeados", _evts);
      this.eventos$.next(_evts);
     },
     error=>{
       console.log(error);
     }
     );
  }

  clickFecha(evento){
    this.pedidoModal(evento);
  }

  clickEvento(evento){
    console.log("Se activó el evento click del evento =>", evento);
    this.pedidoModal();
  }

  pedidoModal(evento=null){
    const dialogRef = this._dialog.open(PedidoComponent, {
      minWidth: '500px',
      data:{
        fechaEvento:evento?.dateStr
      }
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      this.getPedido();
    });
  }

  ngOnInit(): void {

    this.eventos$.subscribe((data:any[])=>{
      //this.calendarOptions.events=data;

      this.calendarOptions={
        locale: 'es',
        initialView: 'dayGridMonth',
        buttonText: {
          today: 'Hoy',
          month: 'Mes',
          week: 'Semana',
          day: 'Día',
          list: 'Lista'
        },
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: ''
        },
        events:data,
        dateClick: this.clickFecha.bind(this),
        eventClick: this.clickEvento.bind(this),
        //events:this.eventos
      };

      console.log("Estas son las calendarOptions =>",this.calendarOptions);
    });

    this.getPedido();
  }

}
