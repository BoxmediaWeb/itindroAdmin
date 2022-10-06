import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { FuseModule } from '@fuse';
import { FuseConfigModule } from '@fuse/services/config';
import { FuseMockApiModule } from '@fuse/lib/mock-api';
import { CoreModule } from 'app/core/core.module';
import { appConfig } from 'app/core/config/app.config';
import { mockApiServices } from 'app/mock-api';
import { LayoutModule } from 'app/layout/layout.module';
import { AppComponent } from 'app/app.component';
import { appRoutes } from 'app/app.routing';
import { InicioComponent } from './page/inicio/inicio.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { DespachosComponent } from './page/despachos/despachos.component';
import { PagosComponent } from './page/pagos/pagos.component';
import { TipoConcretoComponent } from './page/tipo-concreto/tipo-concreto.component';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import { UsuariosComponent } from './page/usuarios/usuarios.component';
import { FuseDrawerModule } from '@fuse/components/drawer';
import { FuseAlertModule } from '@fuse/components/alert';
import { FuseCardModule } from '@fuse/components/card';
import { FuseLoadingBarModule } from '@fuse/components/loading-bar';
import { FuseHighlightModule } from '@fuse/components/highlight';
import { FuseMasonryModule } from '@fuse/components/masonry';
import { FuseNavigationModule } from '@fuse/components/navigation';
import { FuseScrollResetModule } from '@fuse/directives/scroll-reset';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SharedModule } from './shared/shared.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSortModule } from '@angular/material/sort';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TranslocoModule } from '@ngneat/transloco';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AprobacionesComponent } from './page/aprobaciones/aprobaciones.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ImageCropperModule } from 'ngx-image-cropper';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { EstadisticasComponent } from './page/estadisticas/estadisticas.component';
import { CalendarioComponent } from './page/calendario/calendario.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import timeGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!



const routerConfig: ExtraOptions = {
    preloadingStrategy       : PreloadAllModules,
    scrollPositionRestoration: 'enabled'
};

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin,
]);

@NgModule({
    declarations: [
        AppComponent,
        InicioComponent,
        DespachosComponent,
        PagosComponent,
        TipoConcretoComponent,
        UsuariosComponent,
        AprobacionesComponent,
        EstadisticasComponent,
        CalendarioComponent
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),

        // Fuse, FuseConfig & FuseMockAPI
        FuseModule,
        FuseConfigModule.forRoot(appConfig),
        FuseMockApiModule.forRoot(mockApiServices),

        // Core module of your application
        CoreModule,

        // Layout module of your application
        LayoutModule,

        // 3rd party modules that require global configuration via forRoot
        MarkdownModule.forRoot({}),

        ReactiveFormsModule,
        MatFormFieldModule,

        MatTableModule,
        MatIconModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        MatSelectModule,
        MatPaginatorModule,

        FuseAlertModule,
        FuseCardModule,
        FuseDrawerModule,
        FuseHighlightModule,
        FuseLoadingBarModule,
        FuseMasonryModule,
        FuseNavigationModule,
        FuseScrollResetModule,
        FuseDrawerModule,




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
        MatAutocompleteModule,
        MatSlideToggleModule,
        ImageCropperModule,
        MatSnackBarModule,
        NgxChartsModule,
        FormsModule,
        FullCalendarModule
    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
