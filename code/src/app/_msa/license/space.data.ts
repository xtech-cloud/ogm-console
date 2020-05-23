export let columns = {
    id: {
      title: 'Index',
      filter: false
    },
    name: {
      title: 'Name',
      filter: false,
    },
    key: {
      title: 'Key',
      filter: false,
    },
    secret: {
      title: 'Secret',
      filter: false,
    },
    profile: {
      title: 'Profile',
      filter: false,
    },
    createdAt: {
      title: 'Created At',
      filter: false,
    },
}

export let settings = {
  noDataMessage: '',
  actions: {
    columnTitle: '操作',
    add: false,
    edit: false,
    delete: false,
    position: 'right'
  },
  pager: {  
    display: true,  
    perPage: 10  
  },
  columns: columns,
};
