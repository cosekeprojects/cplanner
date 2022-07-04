export default {
    items: [
        {
            id: 'navigation',
            title: 'Navigation',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/dashboard/default',
                    icon: 'feather icon-home',
                }
            ]
        },
        {
            id: 'ui-element',
            title: 'COMMUNICATIONS',
            type: 'group',
            icon: 'icon-message-square',
            children: [
                {
                    id: 'basic',
                    title: 'Communications',
                    type: 'collapse',
                    icon: 'feather icon-message-square',
                
                children: [
                    {
                        id: 'bootstrap',
                        title: 'Feed',
                        type: 'item',
                        icon: 'feather icon-activity',
                        url: '/tables/bootstrap'
                    },
                    {
                        id: 'bootstrap',
                        title: 'Chart & Calls',
                        type: 'item',
                        icon: 'feather icon-message-circle',
                        url: '/tables/bootstrap'
                    },
                    {
                        id: 'bootstrap',
                        title: 'Calender',
                        type: 'item',
                        icon: 'feather icon-align-justify',
                        url: '/tables/bootstrap'
                    },
                    {
                        id: 'bootstrap',
                        title: 'Online Documents',
                        type: 'item',
                        icon: 'feather icon-file-text',
                        url: '/tables/bootstrap'
                    },
                    {
                        id: 'bootstrap',
                        title: 'C-Planner Drive',
                        type: 'item',
                        icon: 'feather icon-inbox',
                        url: '/tables/bootstrap'
                    },
                    {
                        id: 'bootstrap',
                        title: 'Webmail',
                        type: 'item',
                        icon: 'feather icon-mail',
                        url: '/tables/bootstrap'
                    },
                    {
                        id: 'bootstrap',
                        title: 'Workgroup',
                        type: 'item',
                        icon: 'feather icon-users',
                        url: '/tables/bootstrap'
                    }
                ]
                }
            ]
        },
        {
            id: 'ui-forms',
            title: 'Work',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'form-basic',
                    title: 'Tasks and Projects',
                    type: 'item',
                    url: '/forms/form-basic',
                    icon: 'feather icon-list'
                },
                {
                    id: 'form-basic',
                    title: 'Budgeting',
                    type: 'item',
                    url: '/forms/form-basic',
                    icon: 'feather icon-list'
                }
               
            ]
        },
        
        {
            id: 'chart-maps',
            title: 'Marketing',
            type: 'group',
            icon: 'icon-charts',
            children: [
                {
                    id: 'charts',
                    title: 'Marketing',
                    type: 'item',
                    icon: 'feather icon-message-circle',
                    url: '/charts/nvd3'
                }
            ]
        },
        {
            id: 'pages',
            title: 'Applications',
            type: 'group',
            icon: 'icon-pages',
            children: [
                {
                    id: 'auth',
                    title: 'Applications',
                    type: 'collapse',
                    icon: 'feather icon-lock',
                    
                    children: [
                        {
                            id: 'signup-1',
                            title: 'Integrate with Market',
                            type: 'item',
                            url: '/auth/signup-1',
                            target: true,
                            icon:'feather icon-chevron-up',
                            breadcrumbs: false
                        },
                        {
                            id: 'signup-1',
                            title: 'SMS to CRM',
                            type: 'item',
                            icon:'feather icon-at-sign',
                            url: '/auth/signup-1',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'signup-1',
                            title: 'Ticketing / Support',
                            type: 'item',
                            url: '/auth/signup-1',
                            icon:'feather icon-credit-card',
                            target: true,
                            breadcrumbs: false
                        },
                        {
                            id: 'signup-1',
                            title: 'Personal HR',
                            type: 'item',
                            url: '/auth/signup-1',
                            icon:'feather icon-file-text',
                            target: true,
                            breadcrumbs: false
                        }
                    ]
                }
            ]
        }
    ]
}