export let columns = {
    id: {
      title: 'Index',
      filter: false
    },
    filepath: {
      title: 'Path',
      filter: false,
    },
    size: {
      title: 'Size',
      filter: false,
    },
    md5: {
      title: 'MD5',
      filter: false,
    },
    url: {
      title: 'URL',
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
