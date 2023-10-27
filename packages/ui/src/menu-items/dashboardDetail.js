// assets
import { IconHierarchy, IconBuildingStore, IconKey, IconTool, IconLock, IconMenu2 } from '@tabler/icons'

// constant
const icons = { IconHierarchy, IconBuildingStore, IconKey, IconTool, IconLock, IconMenu2 }

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboardDetail = {
    id: 'dashboard',
    title: '',
    type: 'group',
    children: [
        {
            id: 'chatflows',
            title: 'Chatflows',
            type: 'item',
            url: '/chatflows',
            icon: icons.IconHierarchy,
            breadcrumbs: true
        },
        {
            id: 'marketplaces',
            title: 'Marketplaces',
            type: 'item',
            url: '/marketplaces',
            icon: icons.IconBuildingStore,
            breadcrumbs: true
        },
        {
            id: 'tools',
            title: 'Tools',
            type: 'item',
            url: '/tools',
            icon: icons.IconTool,
            breadcrumbs: true
        },
        {
            id: 'credentials',
            title: 'Credentials',
            type: 'item',
            url: '/credentials',
            icon: icons.IconLock,
            breadcrumbs: true
        },
        // {
        //     id: 'apikey',
        //     title: 'API Keys',
        //     type: 'item',
        //     url: '/apikey',
        //     icon: icons.IconKey,
        //     breadcrumbs: true
        // },
        {
            id: 'settings',
            type: 'item',
            title: 'Settings',
            icon: icons.IconSettings,
            breadcrumbs: true
        }
    ]
}
export default dashboardDetail