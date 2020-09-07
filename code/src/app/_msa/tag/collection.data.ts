export let columns = {
    id: {
      title: 'Index',
      filter: false
    },
    code: {
      title: 'Code',
      filter: false,
    },
    name: {
      title: 'Name',
      filter: false,
    },
    flag: {
      title: 'Flag',
      filter: false,
    },
    alias: {
      title: 'Alias',
      filter: false,
    },
    keyword: {
      title: 'Keyword',
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
