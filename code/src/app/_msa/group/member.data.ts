export let columns = {
    id: {
      title: 'Index',
      filter: false
    },
    uuid: {
      title: 'UUID',
      filter: false,
    },
    collection: {
      title: 'Collection',
      filter: false,
    },
    element: {
      title: 'Element',
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
