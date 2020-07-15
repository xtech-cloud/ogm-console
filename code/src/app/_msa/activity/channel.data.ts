export let columns = {
    id: {
      title: 'Index',
      filter: false
    },
    notification: {
      title: 'Notification',
      filter: false,
    },
    alias: {
      title: 'Alias',
      filter: false,
    }
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
    perPage: 50  
  },
  columns: columns,
};
