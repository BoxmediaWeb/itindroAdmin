import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Route, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
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
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
//import { TipoConcretoComponent } from './tipo-concreto.component';
//import { ConcretoComponent } from './concreto/concreto.component';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import { UsuariosComponent } from './usuarios.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { CrearComponent } from './crear/crear.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { ListaConductoresComponent } from './lista-conductores/lista-conductores.component';
import { ListaVendedoresComponent } from './lista-vendedores/lista-vendedores.component';
import { RolesPermisosComponent } from './roles-permisos/roles-permisos.component';
import { RecortarImagenComponent } from './recortar-imagen/recortar-imagen.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { CrearModalComponent } from './crear-modal/crear-modal.component';
import { DetalleComponent } from './detalle/detalle.component';
import { RolesComponent } from './roles/roles.component';
import { CrearRoleComponent } from './crear-role/crear-role.component';
import { PermisosComponent } from './permisos/permisos.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { EditarPasswordComponent } from './editar-password/editar-password.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


const usuariosRoutes: Route[] = [
    {
        path     : '',
        component: UsuariosComponent,
        children   : [
            //{path: '', redirectTo: 'usuarios'},
            {path: '',   redirectTo: 'detalle', pathMatch: 'full'},
            {path     : 'detalle',component: DetalleComponent},
            {path     : 'roles',component: RolesComponent},
            {path     : 'permiso/role/:id', component: PermisosComponent},



            
            {path: 'usuarios', component:ListaUsuariosComponent},
            {path: 'clientes', component:ListaClientesComponent},
            {path: 'conductores', component:ListaConductoresComponent},
            {path: 'vendedores', component:ListaVendedoresComponent},
            {path: 'crear/:tipo', component:CrearComponent},
            {path: 'editar/:tipo/:id', component:CrearComponent},
            {path: 'rolespermisos', component:RolesPermisosComponent},
        ]
    }
];

@NgModule({
    declarations: [
  
  
    ListaUsuariosComponent,
            CrearComponent,
            ListaClientesComponent,
            ListaConductoresComponent,
            ListaVendedoresComponent,
            RolesPermisosComponent,
            RecortarImagenComponent,
            CrearModalComponent,
            DetalleComponent,
            RolesComponent,
            CrearRoleComponent,
            PermisosComponent,
            EditarPasswordComponent
  ],
    imports     : [
        RouterModule.forChild(usuariosRoutes),
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

        ReactiveFormsModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatSelectModule,
        MatPaginatorModule,
        MatSidenavModule,



        MatTableModule,
        MatIconModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatSelectModule,
        MatFormFieldModule,
        MatIconModule,
        MatSelectModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatIconModule,
        MatSelectModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatIconModule,
        MatSelectModule,
        MatSidenavModule,
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
        MatButtonToggleModule,
        NgApexchartsModule,
        MatTableModule,
        MatIconModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatSelectModule,
        MatFormFieldModule,
        MatIconModule,
        MatSelectModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatIconModule,
        MatSelectModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatIconModule,
        MatSelectModule,
        MatSidenavModule,
        FuseAlertModule,
        FuseCardModule,
        FuseDrawerModule,
        FuseHighlightModule,
        FuseLoadingBarModule,
        FuseMasonryModule,
        FuseNavigationModule,
        FuseScrollResetModule,
        SharedModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        ImageCropperModule,
        MatIconModule,
        MatExpansionModule,
        MatSlideToggleModule

    ]
})
export class UsuariosModule
{
}