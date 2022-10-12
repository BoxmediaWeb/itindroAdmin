import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trazabilidad',
  templateUrl: './trazabilidad.component.html',
  styleUrls: ['./trazabilidad.component.scss']
})
export class TrazabilidadComponent implements OnInit {

  constructor() { }

  dataSource = [
    {
      radicado:"0000",
      remitente:"Andrés Salas",
      asunto:"Documento",
      anexos:"10",
      antecedente:"asdasd",
      destinatario:"asdasd"
    },
  ];

  trazabilidad = [
    {
      nombre:"Julian David Torres",
      accion:"registrado",
      fecha:"12-10-2022 06:30pm"
    },
    {
      nombre:"Zulai Pérez Gomez",
      accion:"radicado",
      fecha:"12-10-2022 06:30pm"
    },
    {
      nombre:"Zulai Pérez Gomez",
      accion:"enviado",
      fecha:"25-10-2022 06:30pm"
    },
    {
      nombre:"Envía",
      accion:"despachado",
      fecha:"5-11-2022 06:30pm"
    }
    ]
  

  displayedColumns: string[] = ['radicado', 'remitente', 'asunto', 'anexos', 'antecedente', 'destinatario'];

  ngOnInit(): void {
  }

}
