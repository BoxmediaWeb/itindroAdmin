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
import { CalendarioComponent } from './calendario.component';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FullCalendarModule } from '@fullcalendar/angular';


const calendarioRoutes: Route[] = [
    {
        path     : '',
        component: CalendarioComponent
    }
];

@NgModule({
    declarations: [
  ],
    imports     : [
        RouterModule.forChild(calendarioRoutes),
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
        FullCalendarModule
    ]
})
export class CalendarioModule
{
}