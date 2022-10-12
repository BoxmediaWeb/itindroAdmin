import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ActivationEnd, NavigationEnd, Router } from '@angular/router';
import { InsertarComponent } from 'app/modules/terceros/insertar/insertar.component';
import { filter } from 'rxjs';
import { TrazabilidadComponent } from '../trazabilidad/trazabilidad.component';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.scss']
})
export class SeccionComponent implements OnInit {

  filtroForm = this._formBuilder.group({
    nombre     : [, [Validators.required]]
  });



  dataSource = [
    {
      radicado:"0001",
      remitente:"Andrés Salas",
      asunto:"Nuevo documento",
      anexos:"Nuevo documento",
      antecedente:"sgdfgdfg",
      destinatarios:"entregado",
    },
  ];

  displayedColumns: string[] = ['radicado', 'remitente', 'destinatario', 'responsable', 'asunto', 'fecha', 'estado', 'adjunto', 'trazabilidad'];

  constructor(private _router:Router,private route: ActivatedRoute,public _dialog: MatDialog,private _formBuilder: FormBuilder) { }

  buscarNombre($event){
    console.log("Busqueda evento",$event);
  }

  trazabilidadModal(comunicacion=null) {
    const dialogRef = this._dialog.open(TrazabilidadComponent, {
      width: '500px',
      data:{
        funcionario:comunicacion
      }
    });
  }





  ngOnInit(): void {

    
    this._router.events.pipe(filter(event => event instanceof ActivationEnd))//event instanceof NavigationEnd
      .subscribe((event:ActivationEnd) => {
        console.log("parámetros enviados por la ruta =>",event.snapshot.params);
    });

    

  }

}
