export let columns = {
    id: {
      title: 'Index',
      filter: false
    },
    uuid: {
      title: 'UUID',
      filter: false,
    },
    name: {
      title: 'Name',
      filter: false,
    },
    storage: {
      title: 'Storage',
      filter: false,
    },
    engine: {
      title: 'Engine',
      filter: false,
    },
    address: {
      title: 'Address',
      filter: false,
    },
    scope: {
      title: 'Scope',
      filter: false,
    },
    accessKey: {
      title: 'Access Key',
      filter: false,
    },
    accessSecret: {
      title: 'Access Secret',
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
