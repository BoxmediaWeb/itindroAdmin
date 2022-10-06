import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { ApiService } from 'app/core/api/api.service';
import { Subject, takeUntil } from 'rxjs';
import { CambiarEstadoComponent } from '../despachos/cambiar-estado/cambiar-estado.component';
import { ConcretoComponent } from '../tipo-concreto/concreto/concreto.component';
import { UsuariosService } from './usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  @ViewChild('drawer') drawer: MatDrawer;
  drawerMode: 'over' | 'side' = 'side';
  drawerOpened: boolean = true;
  panels: any[] = [];
  dataUsers: any[] = [];
  dataRoles: any[] = [];
  selectedPanel: string = 'usuarios';
  private _unsubscribeAll: Subject<any> = new Subject<any>();




  

      /**
     * Get the details of the panel
     *
     * @param id
     */
       getPanelInfo(id: string): any
       {
           return this.panels.find(panel => panel.id === id);
       }


           /**
     * Navigate to the panel
     *
     * @param panel
     */
    goToPanel(panel: string): void
    {
        this._usuariosService.setPanel(panel);
        this.irListaUsuarios(panel);

    }

    irListaUsuarios(panel) {
        this._router.navigate([`/usuarios/${panel}`]);
    }




  constructor(private _formBuilder: FormBuilder,public _dialog: MatDialog, private _apiService: ApiService, private _fuseMediaWatcherService: FuseMediaWatcherService,private _changeDetectorRef: ChangeDetectorRef, private _usuariosService:UsuariosService,private _router:Router) { }

  ngOnInit(): void {
    
    this.panels = [
        {
            id         : 'usuarios',
            icon       : 'heroicons_outline:user-circle',
            title      : 'Usuarios',
            description: 'Gestiona y visualiza la lista de usuarios registrados',
            link: "detalle"
        },
        {
            id         : 'clientes',
            icon       : 'heroicons_outline:hand',
            title      : 'Clientes',
            description: 'Asigna roles a los usuarios según sus asignaciones',
            link: "clientes"
        },
        {
            id         : 'conductores',
            icon       : 'heroicons_outline:truck',
            title      : 'Conductores',
            description: 'Asigna roles a los usuarios según sus asignaciones',
            link: "roles"
        },
        {
            id         : 'vendedores',
            icon       : 'heroicons_outline:briefcase',
            title      : 'Vendedores',
            description: 'Asigna roles a los usuarios según sus asignaciones',
            link: "roles"
        },
        {
            id         : 'rolespermisos',
            icon       : 'heroicons_outline:identification',
            title      : 'Roles y permisos',
            description: 'Asigna roles a los usuarios según sus asignaciones',
            link: "rolespermisos"
    }
  ];

    this._usuariosService.getPanel().subscribe((data)=>{
        this.selectedPanel = data;
    });


  // Subscribe to media changes
  this._fuseMediaWatcherService.onMediaChange$
  .pipe(takeUntil(this._unsubscribeAll))
  .subscribe(({matchingAliases}) => {

      // Set the drawerMode and drawerOpened
      if ( matchingAliases.includes('lg') )
      {
          this.drawerMode = 'side';
          this.drawerOpened = true;
      }
      else
      {
          this.drawerMode = 'over';
          this.drawerOpened = false;
      }

      // Mark for check
      this._changeDetectorRef.markForCheck();
  });




    



    
  }




}
