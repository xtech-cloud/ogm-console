import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    {
        path: '',
        title: 'Business Logic Agent',
        icon: '',
        class: 'nav-small-cap',
        label: '',
        labelClass: '',
        extralink: true,
        submenu: []
    },
    {
        path: '',
        title: 'Micro Lesson Builder',
        icon: 'mdi mdi-google-nearby',
        class: 'has-arrow',
        label: '',
        labelClass: 'label label-rouded label-themecolor',
        extralink: false,
        submenu: [
            {
                path: '/bla/mlb/queue',
                title: 'Queue',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/bla/mlb/history',
                title: 'History',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Micro Service Agent',
        icon: '',
        class: 'nav-small-cap',
        label: '',
        labelClass: '',
        extralink: true,
        submenu: []
    },

    {
        path: '',
        title: 'Account',
        icon: 'mdi mdi-account',
        class: 'has-arrow',
        label: '',
        labelClass: 'label label-rouded label-themecolor',
        extralink: false,
        submenu: [
            {
                path: '/msa/account/dashboard',
                title: 'Dashboard',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/msa/account/create',
                title: 'Create',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/msa/account/retrieval',
                title: 'Retrieval',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/msa/account/update',
                title: 'Update',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
        ]
    },
    {
        path: '',
        title: 'Activity',
        icon: 'mdi mdi-flash',
        class: 'has-arrow',
        label: '',
        labelClass: 'label label-rouded label-themecolor',
        extralink: false,
        submenu: [
            {
                path: '/msa/activity/channel',
                title: 'Channel',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/msa/activity/record',
                title: 'Record',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
        ]
    },
    {
        path: '',
        title: 'Analytics',
        icon: 'mdi mdi-chart-areaspline',
        class: 'has-arrow',
        label: '',
        labelClass: 'label label-rouded label-themecolor',
        extralink: false,
        submenu: [
            {
                path: '/msa/analytics/agent',
                title: 'Agent',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
        ]
    },
    {
        path: '',
        title: 'File',
        icon: 'mdi mdi-file-cloud',
        class: 'has-arrow',
        label: '',
        labelClass: 'label label-rouded label-themecolor',
        extralink: false,
        submenu: [
            {
                path: '/msa/file/dashboard',
                title: 'Dashboard',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/msa/file/bucket',
                title: 'Bucket',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/msa/file/object',
                title: 'Object',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
        ]
    },

    {
        path: '',
        title: 'License',
        icon: 'mdi mdi-key-variant',
        class: 'has-arrow',
        label: '',
        labelClass: 'label label-rouded label-themecolor',
        extralink: false,
        submenu: [
            {
                path: '/msa/license/dashboard',
                title: 'Dashboard',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/msa/license/space',
                title: 'Space',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/msa/license/key',
                title: 'Key',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/msa/license/certificate',
                title: 'Certificate',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Tag',
        icon: 'mdi mdi-chart-areaspline',
        class: 'has-arrow',
        label: '',
        labelClass: 'label label-rouded label-themecolor',
        extralink: false,
        submenu: [
            {
                path: '/msa/tag/collection',
                title: 'Collection',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
        ]
    },
    {
        path: '',
        title: 'Video',
        icon: 'mdi mdi-camcorder-box',
        class: 'has-arrow',
        label: '',
        labelClass: 'label label-rouded label-themecolor',
        extralink: false,
        submenu: [
            {
                path: '/msa/video/build',
                title: 'Build',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/msa/video/queue',
                title: 'Queue',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/msa/video/history',
                title: 'History',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            }
        ]
    },

    {
        path: '',
        title: 'Data Storage Center',
        icon: '',
        class: 'nav-small-cap',
        label: '',
        labelClass: '',
        extralink: true,
        submenu: []
    },
    {
        path: '',
        title: 'MySQL',
        icon: 'mdi mdi-database',
        class: 'has-arrow',
        label: '',
        labelClass: 'label label-rouded label-themecolor',
        extralink: false,
        submenu: [
            {
                path: '/dsc/mysql/web',
                title: 'Web',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'MongoDB',
        icon: 'mdi mdi-database',
        class: 'has-arrow',
        label: '',
        labelClass: 'label label-rouded label-themecolor',
        extralink: false,
        submenu: [
            {
                path: '/dsc/mongodb/web',
                title: 'Web',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Redis',
        icon: 'mdi mdi-database',
        class: 'has-arrow',
        label: '',
        labelClass: 'label label-rouded label-themecolor',
        extralink: false,
        submenu: [
            {
                path: '/dsc/redis/web',
                title: 'Web',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'DGraph',
        icon: 'mdi mdi-database',
        class: 'has-arrow',
        label: '',
        labelClass: 'label label-rouded label-themecolor',
        extralink: false,
        submenu: [
            {
                path: '/dsc/dgraph/web',
                title: 'Web',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'MinIO',
        icon: 'mdi mdi-database',
        class: 'has-arrow',
        label: '',
        labelClass: 'label label-rouded label-themecolor',
        extralink: false,
        submenu: [
            {
                path: '/dsc/minio/web',
                title: 'Web',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            }
        ]
    },

    {
        path: '',
        title: 'Service Registry Center',
        icon: '',
        class: 'nav-small-cap',
        label: '',
        labelClass: '',
        extralink: true,
        submenu: []
    },
    {
        path: '',
        title: 'NC',
        icon: 'mdi mdi-hexagon-multiple',
        class: 'has-arrow',
        label: '',
        labelClass: 'label label-rouded label-themecolor',
        extralink: false,
        submenu: [
            {
                path: '/src/nc/consul',
                title: 'Consul',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            }
        ]
    },

    {
        path: '',
        title: 'Foundation Service',
        icon: '',
        class: 'nav-small-cap',
        label: '',
        labelClass: '',
        extralink: true,
        submenu: []
    },
    {
        path: '',
        title: 'Micro',
        icon: 'mdi mdi-maxcdn',
        class: 'has-arrow',
        label: '',
        labelClass: 'label label-rouded label-themecolor',
        extralink: false,
        submenu: [
            {
                path: '/foundation/micro/web',
                title: 'Web',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
]

export const TEMPLATE_ROUTES: RouteInfo[] = [
    {
        path: '',
        title: 'Personal',
        icon: '',
        class: 'nav-small-cap',
        label: '',
        labelClass: '',
        extralink: true,
        submenu: []
    },
    {
        path: '',
        title: 'Dashboards',
        icon: 'mdi mdi-gauge',
        class: 'has-arrow',
        label: '4',
        labelClass: 'label label-rouded label-themecolor',
        extralink: false,
        submenu: [
            {
                path: '/dashboard/dashboard1',
                title: 'Modern',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/dashboard/dashboard2',
                title: 'Classic',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/dashboard/dashboard3',
                title: 'Analytical',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Apps',
        icon: 'mdi mdi-apps',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
            {
                path: '/apps/email',
                title: 'Mailbox',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/apps/fullcalendar',
                title: 'Calendar',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/apps/taskboard',
                title: 'Taskboard',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'UI Components',
        icon: '',
        class: 'nav-small-cap',
        label: '',
        labelClass: '',
        extralink: true,
        submenu: []
    },
    {
        path: '',
        title: 'Component',
        icon: 'mdi mdi-bullseye',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
            {
                path: '/component/accordion',
                title: 'Accordion',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/alert',
                title: 'Alert',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/carousel',
                title: 'Carousel',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/dropdown',
                title: 'Dropdown',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/modal',
                title: 'Modal',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/pagination',
                title: 'Pagination',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/poptool',
                title: 'Popover & Tooltip',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/progressbar',
                title: 'Progressbar',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/rating',
                title: 'Ratings',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/tabs',
                title: 'Tabs',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/timepicker',
                title: 'Timepicker',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/buttons',
                title: 'Button',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/cards',
                title: 'Card',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Extra Components',
        icon: 'mdi mdi-dropbox',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
            {
                path: '/extra-component/toastr',
                title: 'Toastr',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/extra-component/upload',
                title: 'File Upload',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/extra-component/editor',
                title: 'Editor',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/extra-component/dragndrop',
                title: 'Drag n Drop',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Forms & Tables',
        icon: '',
        class: 'nav-small-cap',
        label: '',
        labelClass: '',
        extralink: true,
        submenu: []
    },
    {
        path: '',
        title: 'Forms',
        icon: 'mdi mdi-file',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
            {
                path: '/forms/basicform',
                title: 'Basic Forms',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/forms/formvalidation',
                title: 'Form Validation',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/typehead',
                title: 'Form Typehead',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/datepicker',
                title: 'Datepicker',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/component/language-datepicker',
                title: 'Language Datepicker',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Tables',
        icon: 'mdi mdi-table',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
            {
                path: '/tables/basictable',
                title: 'Basic Tables',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/tables/smarttable',
                title: 'Smart Tables',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/tables/datatable',
                title: 'Data Tables',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '/widgets',
        title: 'Widgets',
        icon: 'mdi mdi-widgets',
        class: '',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: []
    },
    {
        path: '',
        title: 'Charts & Icons',
        icon: '',
        class: 'nav-small-cap',
        label: '',
        labelClass: '',
        extralink: true,
        submenu: []
    },
    {
        path: '',
        title: 'Charts',
        icon: 'mdi mdi-chart-arc',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
            {
                path: '/charts/chartjs',
                title: 'Chart Js',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/charts/chartistjs',
                title: 'Chartist Js',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Icons',
        icon: 'mdi mdi-brush',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
            {
                path: '/icons/fontawesome',
                title: 'Fontawesome',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/icons/simpleline',
                title: 'Simple Line Icons',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/icons/material',
                title: 'Material Icons',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Pages',
        icon: '',
        class: 'nav-small-cap',
        label: '',
        labelClass: '',
        extralink: true,
        submenu: []
    },
    {
        path: '',
        title: 'Authentication',
        icon: 'mdi mdi-lock',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
            {
                path: '/authentication/login',
                title: 'Login',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/authentication/login2',
                title: 'Login 2',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/authentication/signup',
                title: 'Register',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/authentication/signup2',
                title: 'Register 2',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/authentication/404',
                title: '404',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/authentication/lock',
                title: 'Lockscreen',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Sample Pages',
        icon: 'mdi mdi-file',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
            {
                path: '/sample-pages/timeline',
                title: 'Timeline',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/sample-pages/profile',
                title: 'Profile',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/sample-pages/pricing',
                title: 'Pricing',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/sample-pages/invoice',
                title: 'Invoice',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/sample-pages/helperclasses',
                title: 'Helper Classes',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            },
            {
                path: '/starter',
                title: 'Starter Page',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'Menu Levels',
        icon: 'mdi mdi-arrange-send-backward',
        class: 'has-arrow',
        label: '',
        labelClass: '',
        extralink: false,
        submenu: [
            {
                path: 'javascript:void(0);',
                title: 'Second Level',
                icon: '',
                class: '',
                label: '',
                labelClass: '',
                extralink: true,
                submenu: []
            },
            {
                path: '',
                title: 'Second Child',
                icon: '',
                class: 'has-arrow',
                label: '',
                labelClass: '',
                extralink: false,
                submenu: [
                    {
                        path: 'javascript:void(0);',
                        title: 'Third 1.1',
                        icon: '',
                        class: '',
                        label: '',
                        labelClass: '',
                        extralink: false,
                        submenu: []
                    },
                    {
                        path: 'javascript:void(0);',
                        title: 'Third 1.2',
                        icon: '',
                        class: '',
                        label: '',
                        labelClass: '',
                        extralink: false,
                        submenu: []
                    }
                ]
            }
        ]
    }
];
