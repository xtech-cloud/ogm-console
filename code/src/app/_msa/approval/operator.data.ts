export let columns = {
    id: {
      title: 'Index',
      filter: false
    },
    operator: {
      title: 'Operator',
      filter: false,
    },
    workflow: {
      title: 'Workflow',
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
