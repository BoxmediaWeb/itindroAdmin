import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  filtroForm = this._formBuilder.group({
    nombre     : [, [Validators.required]]
  });
 
  dataSource = [
    {
      id:1,
      razonSocial:"Box Media S.A.S",
      tipoDocumento:"NIT",
      documento:"1090481240",
      departamento:"Antioquia",
      ciudad:"Medellín",
      centroPoblado:"#1",
      email:"andres@gmail.com",
      direccion:"Cl 6 # 4-27 Robledo",
      telefono:"65464564",
      celular:"464646+4",
      cargo:"Desarrollador",
      funcionarios:"Lista",
    },
  ];

  displayedColumns: string[] = ['razonSocial', 'tipoDocumento', 'documento', 'departamento', 'ciudad', 'centroPoblado', 'direccion', 'telefono', 'celular', 'cargo', 'email', 'funcionarios'];

  constructor(private _router:Router,private route: ActivatedRoute,private _formBuilder: FormBuilder) { }

  insertarTercero(tercero=null){
    if(!tercero){
      this._router.navigate([`/terceros/crear`]);
    }else{
      this._router.navigate([`/terceros/editar/${tercero.id}`]);
    }
  }

  irFuncionarios(){
    this._router.navigate([`/terceros/funcionarios`]);
  }

  buscarNombre($event){
    console.log("Busqueda evento",$event);
  }

  ngOnInit(): void {

    this._router.events.pipe(filter(event => event instanceof ActivationEnd))
      .subscribe((event:ActivationEnd) => {
        console.log("parámetros enviados por la ruta =>",event.snapshot.params);
    });

  }

}
