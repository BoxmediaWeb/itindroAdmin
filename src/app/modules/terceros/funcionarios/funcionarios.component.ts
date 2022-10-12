import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { InsertarFuncionariosComponent } from '../insertar-funcionarios/insertar-funcionarios.component';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.scss']
})
export class FuncionariosComponent implements OnInit {

  filtroForm = this._formBuilder.group({
    nombre     : [, [Validators.required]]
  });

  dataSource = [
    {
      nombre:"Andres",
      cargo:"Desarrollador"
    },
  ];


  displayedColumns: string[] = ['nombre', 'cargo', 'acciones'];

  constructor(private _router:Router,private route: ActivatedRoute,public _dialog: MatDialog,private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  insertarFuncionarioModal(funcionario=null) {
    const dialogRef = this._dialog.open(InsertarFuncionariosComponent, {
      minWidth: '500px',
      data:{
        funcionario:funcionario
      }
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {});
  }

  crearTercero(){
    this._router.navigate([`/terceros/crear`]);
  }

  irFuncionarios(){
    this._router.navigate([`/terceros/funcionarios`]);
  }

  buscarNombre(evt){
    console.log("Estamos buscando por el nombre");
  }

}
