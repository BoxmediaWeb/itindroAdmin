/* tslint:disable:max-line-length */
import { FuseNavigationItem } from '@fuse/components/navigation';

export const defaultNavigation: FuseNavigationItem[] = [
    {
        id   : 'inicio',
        title: 'Inicio',
        type : 'basic',
        icon : 'heroicons_outline:home',
        link : '/inicio'
    },
    {
        id   : 'calendario',
        title: 'Calendario',
        type : 'basic',
        icon : 'heroicons_outline:calendar',
        link : '/calendario'
    },
    {
        id   : 'despachos',
        title: 'Despachos',
        type : 'basic',
        icon : 'heroicons_outline:truck',
        link : '/despachos'
    },
    {
        id   : 'aprobaciones',
        title: 'Aprobaciones',
        type : 'basic',
        icon : 'heroicons_outline:clipboard-check',
        link : '/aprobaciones'
    },
    {
        id   : 'pagos',
        title: 'Pagos',
        type : 'basic',
        icon : 'heroicons_outline:cash',
        link : '/pagos'
    },
    {
        id   : 'configuraciones',
        title: 'Configuraciones',
        type : 'collapsable',
        icon : 'heroicons_outline:cog',
        children: [
            {
                id   : 'usuarios',
                title: 'Usuarios',
                type : 'basic',
                icon : 'heroicons_outline:user-circle',
                link : '/usuarios'
            },
            {
                id   : 'tipoconcreto',
                title: 'Tipo concreto',
                type : 'basic',
                icon : 'heroicons_outline:database',
                link : '/tipoconcreto'
            },
            {
                id   : 'estadisticas',
                title: 'Estadísticas',
                type : 'basic',
                icon : 'heroicons_outline:chart-bar',
                link : '/estadisticas'
            },
        ]
    },
];
export const compactNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const futuristicNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
export const horizontalNavigation: FuseNavigationItem[] = [
    {
        id   : 'example',
        title: 'Example',
        type : 'basic',
        icon : 'heroicons_outline:chart-pie',
        link : '/example'
    }
];
