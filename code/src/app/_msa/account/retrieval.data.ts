export let columns = {
    id: {
      title: 'Index',
      filter: false
    },
    uuid: {
      title: 'UUID',
      filter: false,
    },
    username: {
      title: 'Username',
      filter: false,
    },
    createdAt: {
      title: 'Created At',
      filter: false,
    },
    updatedAt: {
      title: 'Updated At',
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
    perPage: 50  
  },
  columns: columns,
};
