import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Route, RouterModule } from '@angular/router';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { VentanillaComponent } from './Ventanilla.component';
import { FuseAlertModule } from '@fuse/components/alert';
import { FuseCardModule } from '@fuse/components/card';
import { FuseDrawerModule } from '@fuse/components/drawer';
import { FuseHighlightModule } from '@fuse/components/highlight';
import { FuseLoadingBarModule } from '@fuse/components/loading-bar';
import { FuseMasonryModule } from '@fuse/components/masonry';
import { FuseNavigationModule } from '@fuse/components/navigation';
import { FuseScrollResetModule } from '@fuse/directives/scroll-reset';
import { SharedModule } from 'app/shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TranslocoModule } from '@ngneat/transloco';
import {MatTabsModule} from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SeccionComponent } from './seccion/seccion.component';
import { InsertarComponent } from './insertar/insertar.component';
import { TrazabilidadComponent } from './trazabilidad/trazabilidad.component';


const VentanillaRoutes: Route[] = [
    {
        path     : '',
        component: VentanillaComponent,
        children : [
            {
                path: '', redirectTo: 'seccion/externas-usuarios'
            },
            {
                path     : 'seccion/:seccionVentanilla',
                component: SeccionComponent,  
            },
            {
                path     : 'crear/:tipo',
                component: InsertarComponent,  
            }
            /*
            {
                path     : 'externas-usuarios',
                component: SeccionComponent,  
            },
            {
                path     : 'externas-enviados',
                component: SeccionComponent,  
            },
            {
                path     : 'externas-registrados',
                component: SeccionComponent,  
            },
            {
                path     : 'externas-rechazados',
                component: SeccionComponent,  
            },
            {
                path     : 'internas-bandeja',
                component: SeccionComponent,  
            },
            {
                path     : 'internas-enviados',
                component: SeccionComponent,  
            },
            {
                path     : 'internas-rechazados',
                component: SeccionComponent,  
            },
            {
                path     : 'tipologias-registrados',
                component: SeccionComponent,  
            },
            {
                path     : 'tipologias-rechazados',
                component: SeccionComponent,  
            }
            */
        ]
    }
];

@NgModule({
    declarations: [
        SeccionComponent,
        InsertarComponent,
        TrazabilidadComponent
  ],
    imports     : [
        RouterModule.forChild(VentanillaRoutes),
        FuseAlertModule,
        FuseCardModule,
        FuseDrawerModule,
        FuseHighlightModule,
        FuseLoadingBarModule,
        FuseMasonryModule,
        FuseNavigationModule,
        FuseScrollResetModule,
        SharedModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatProgressBarModule,
        MatRippleModule,
        MatSidenavModule,
        MatSortModule,
        MatTableModule,
        NgApexchartsModule,
        TranslocoModule,
        SharedModule,
        MatTabsModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        FuseDrawerModule,
        FuseNavigationModule,

        ReactiveFormsModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatAutocompleteModule,
        MatSnackBarModule
    ]
})
export class VentanillaModule
{
}