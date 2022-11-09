import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { TrazabilidadComponent } from 'app/modules/ventanilla/trazabilidad/trazabilidad.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-lista-inventario',
  templateUrl: './lista-inventario.component.html',
  styleUrls: ['./lista-inventario.component.scss']
})
export class ListaInventarioComponent implements OnInit {

  filtroForm = this._formBuilder.group({
    nombre     : [, [Validators.required]]
  });


  dataSource = [
    {
      oficinaProductora:"entregado",
      serie:"entregado",
      subSerie:"entregado",
      identificacionExpediente:"entregado",
      fechaInicial:"entregado",
      fechaFinal:"entregado",
      unidadConservacion:"entregado",
      soporte:"entregado",
      frecuenciaConsulta:"entregado",
      folios:"entregado",
      tdr:"entregado",
      fechaTranferir:"entregado",
      pasillo:"entregado",
      estante:"entregado",
      fila:"entregado",
      caja:"entregado",
      legajo:"entregado",
      notas:"entregado",
    },
  ];

  displayedColumns: string[] = ['oficinaProductora', 'serie', 'subSerie', 'identificacionExpediente', 'fechaInicial', 'fechaFinal', 'unidadConservacion', 'soporte', 'frecuenciaConsulta','folios','tdr','fechaTranferir','pasillo','estante','fila','caja','legajo','notas','acciones'];

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


  insertarInventario(){
    this._router.navigate([`inventario-gestion/crear`]);
  }

  editarInventario(element){
    this._router.navigate([`inventario-gestion/editar/${element.id}`]);
  }

  ngOnInit(): void {

    
    this._router.events.pipe(filter(event => event instanceof ActivationEnd))//event instanceof NavigationEnd
      .subscribe((event:ActivationEnd) => {
        console.log("parámetros enviados por la ruta =>",event.snapshot.params);
    });

    

  }

}
