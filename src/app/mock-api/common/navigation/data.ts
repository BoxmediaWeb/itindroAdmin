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
        id   : 'ventanilla',
        title: 'Ventanilla única',
        type : 'collapsable',
        icon : 'heroicons_outline:archive',
        children: [
            {
                id   : 'ventanilla',
                title: 'Ventanilla',
                type : 'basic',
                icon : 'heroicons_outline:archive',
                link : '/ventanilla'
            },
            {
                id   : 'terceros',
                title: 'Terceros',
                type : 'basic',
                icon : 'heroicons_outline:user-group',
                link : '/terceros'
            }
        ]
    },
    {
        id   : 'trd',
        title: 'TRD',
        type : 'collapsable',
        icon : 'heroicons_outline:table',
        children: [
            {
                id   : 'trd',
                title: 'TRD',
                type : 'basic',
                icon : 'heroicons_outline:archive',
                link : '/trd'
            },
            {
                id   : 'ccd',
                title: 'CCD',
                type : 'basic',
                icon : 'heroicons_outline:archive',
                link : '/ccd'
            }
        ]
    },
    {
        id   : 'inventario-gestion',
        title: 'Inventario gestión',
        type : 'collapsable',
        icon : 'heroicons_outline:duplicate',
        children: [
            {
                id   : 'inventario-gestion',
                title: 'Inventario gestión',
                type : 'basic',
                icon : 'heroicons_outline:archive',
                link : '/inventario-gestion'
            }
        ]
    },
    {
        id   : 'usuarios',
        title: 'Usuarios',
        type : 'basic',
        icon : 'heroicons_outline:user-circle',
        link : '/usuarios'
    },
    
    
    /*
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
    },*//*
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
    },*/
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
