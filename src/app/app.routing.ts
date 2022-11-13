import { Route } from '@angular/router';
import { AuthGuard } from 'app/core/auth/guards/auth.guard';
import { NoAuthGuard } from 'app/core/auth/guards/noAuth.guard';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';
import { InicioComponent } from './page/inicio/inicio.component';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    // Redirect empty path to '/inicio'
    {path: '', pathMatch : 'full', redirectTo: 'inicio'},

    // Redirect signed in user to the '/example'
    //
    // After the user signs in, the sign in page will redirect the user to the 'signed-in-redirect'
    // path. Below is another redirection for that path to redirect the user to the desired
    // location. This is a small convenience to keep all main routes together here on this file.
    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'inicio'},

    // Auth routes for guests
    {
        path: '',
        canActivate: [NoAuthGuard],
        canActivateChild: [NoAuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'confirmation-required', loadChildren: () => import('app/modules/auth/confirmation-required/confirmation-required.module').then(m => m.AuthConfirmationRequiredModule)},
            {path: 'forgot-password', loadChildren: () => import('app/modules/auth/forgot-password/forgot-password.module').then(m => m.AuthForgotPasswordModule)},
            {path: 'reset-password', loadChildren: () => import('app/modules/auth/reset-password/reset-password.module').then(m => m.AuthResetPasswordModule)},
            {path: 'sign-in', loadChildren: () => import('app/modules/auth/sign-in/sign-in.module').then(m => m.AuthSignInModule)},
            {path: 'sign-up', loadChildren: () => import('app/modules/auth/sign-up/sign-up.module').then(m => m.AuthSignUpModule)}
        ]
    },

    // Auth routes for authenticated users
    {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: LayoutComponent,
        data: {
            layout: 'empty'
        },
        children: [
            {path: 'sign-out', loadChildren: () => import('app/modules/auth/sign-out/sign-out.module').then(m => m.AuthSignOutModule)},
            {path: 'unlock-session', loadChildren: () => import('app/modules/auth/unlock-session/unlock-session.module').then(m => m.AuthUnlockSessionModule)}
        ]
    },

    // Landing routes
    {
        path: '',
        component  : LayoutComponent,
        data: {
            layout: 'empty'
        },
        children   : [
            {path: 'home', loadChildren: () => import('app/modules/landing/home/home.module').then(m => m.LandingHomeModule)},
        ]
    },

    // Admin routes
    {
        path       : '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component  : LayoutComponent,
        resolve    : {
            initialData: InitialDataResolver,
        },
        children   : [
            {path: 'example', loadChildren: () => import('app/modules/admin/example/example.module').then(m => m.ExampleModule)},
            {path: 'ventanilla', loadChildren: () => import('app/modules/ventanilla/ventanilla.module').then(m => m.VentanillaModule)},
            {path: 'terceros', loadChildren: () => import('app/modules/terceros/terceros.module').then(m => m.TercerosModule)},
            {path: 'inventario-gestion', loadChildren: () => import('app/modules/inventario-gestion/inventario-gestion.module').then(m => m.InventarioGestionModule)},
            {path: 'ccd', loadChildren: () => import('app/modules/gestion-ccd/gestion-ccd.module').then(m => m.GestionCCDModule)},
            {path: 'trd', loadChildren: () => import('app/modules/gestion-trd/gestion-trd.module').then(m => m.GestionTRDModule)},

            {path: 'inicio', loadChildren: () => import('app/page/inicio/inicio.module').then(m => m.InicioModule)},
            {path: 'despachos', loadChildren: () => import('app/page/despachos/despachos.module').then(m => m.DespachosModule)},
            {path: 'pagos', loadChildren: () => import('app/page/pagos/pagos.module').then(m => m.PagosModule)},
            {path: 'tipoconcreto', loadChildren: () => import('app/page/tipo-concreto/tipo-concreto.module').then(m => m.TipoConcretoModule)},
            {path: 'usuarios', loadChildren: () => import('app/page/usuarios/usuarios.module').then(m => m.UsuariosModule)},
            {path: 'aprobaciones', loadChildren: () => import('app/page/aprobaciones/aprobaciones.module').then(m => m.AprobacionesModule)},
            {path: 'estadisticas', loadChildren: () => import('app/page/estadisticas/estadisticas.module').then(m => m.EstadisticasModule)},
            {path: 'calendario', loadChildren: () => import('app/page/calendario/calendario.module').then(m => m.CalendarioModule)},
        ]
    }
];
