import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { Subject, takeUntil } from 'rxjs';
import { VentanillaService } from './ventanilla.service';

@Component({
  selector: 'app-ventanilla',
  templateUrl: './ventanilla.component.html',
  styleUrls: ['./ventanilla.component.scss']
})
export class VentanillaComponent implements OnInit {

  @ViewChild('drawer') drawer: MatDrawer;
  drawerMode: 'over' | 'side' = 'side';
  drawerOpened: boolean = true;
  //panels: any[] = [];
  dataUsers: any[] = [];
  dataRoles: any[] = [];
  selectedPanel: string = 'usuarios';
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  panels = [
    {
      type        :'group',
      title      : 'externas',
      children:[
        {
          id         : 'externas-usuarios',
          icon       : 'heroicons_outline:inbox',
          title      : 'Usuarios',
          description: 'Gestiona y visualiza la lista de usuarios registrados',
          type:"basic",
          link: "externas-usuarios"
        },
        {
          id         : 'externas-enviados',
          icon       : 'heroicons_outline:paper-airplane',
          title      : 'Enviados',
          description: 'Gestiona y visualiza la lista de usuarios registrados',
          type:"basic",
          link: "externas-enviados"
        },
        {
          id         : 'externas-registrados',
          icon       : 'heroicons_outline:paper-clip',
          title      : 'Registrados',
          description: 'Gestiona y visualiza la lista de usuarios registrados',
          type:"basic",
          link: "externas-registrados"
        },
        {
          id         : 'externas-rechazados',
          icon       : 'heroicons_outline:x-circle',
          title      : 'Rechazados',
          description: 'Gestiona y visualiza la lista de usuarios registrados',
          type:"basic",
          link: "externas-rechazados"
        },
      ]
    },
    {
      type        :'group',
      title      : 'internas',
      children:[
        {
          id         : 'internas-bandeja',
          icon       : 'heroicons_outline:inbox',
          title      : 'Badeja',
          description: 'Gestiona y visualiza la lista de usuarios registrados',
          type:"basic",
          link: "internas-bandeja"
        },
        {
          id         : 'internas-enviados',
          icon       : 'heroicons_outline:paper-airplane',
          title      : 'Enviados',
          description: 'Gestiona y visualiza la lista de usuarios registrados',
          type:"basic",
          link: "internas-enviados"
        },
        {
          id         : 'internas-rechazados',
          icon       : 'heroicons_outline:x-circle',
          title      : 'Rechazados',
          description: 'Gestiona y visualiza la lista de usuarios registrados',
          type:"basic",
          link: "internas-rechazados"
        },
      ]
    },
    {
      type        :'group',
      title      : 'tipologias',
      children:[
        {
          id         : 'tipologias-registrados',
          icon       : 'heroicons_outline:paper-clip',
          title      : 'Regitrados',
          description: 'Gestiona y visualiza la lista de usuarios registrados',
          type:"basic",
          link: "tipologias-registrados"
        },
        {
          id         : 'tipologias-rechazados',
          icon       : 'heroicons_outline:x-circle',
          title      : 'Rechazado',
          description: 'Gestiona y visualiza la lista de usuarios registrados',
          type:"basic",
          link: "tipologias-rechazados"
        },
      ]
    },

    {
        id         : 'rolespermisos',
        icon       : 'heroicons_outline:identification',
        title      : 'Roles y permisos',
        description: 'Asigna roles a los usuarios según sus asignaciones',
        link: "rolespermisos"
}
  ];


    getPanelInfo(id: string): any
    {
      return this.panels.find(panel => panel.id === id);
    }



    goToPanel(panel: any): void
    {
        this._ventanillaService.setPanel(panel.link);
        this.irAVista(panel.link);
    }


    irAVista(vista){
      this._router.navigate([`/ventanilla/seccion/${vista}`]);
    }

    insertar(panel){
      this._router.navigate([`/ventanilla/crear/${panel.title}`]);
    }


  constructor(private _fuseMediaWatcherService: FuseMediaWatcherService,private _changeDetectorRef: ChangeDetectorRef,private _ventanillaService:VentanillaService,private _router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this._ventanillaService.getPanel().subscribe((data)=>{
      this.selectedPanel = data;
    });

    this.route.firstChild.paramMap.subscribe((params) => {
      console.log("-------------",params);
    });

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
