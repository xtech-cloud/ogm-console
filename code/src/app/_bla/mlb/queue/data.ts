export let columns = {
    id: {
      title: '编号',
      filter: false
    },
    uuid: {
      title: 'UUID',
      filter: false,
    },
    status: {
      title: '状态',
      filter: false,
      type: 'html',
      valuePrepareFunction: data => `<span class="label label-success">PENDING</span>`,
    },
    time: {
      title: '创建时间',
      filter: false
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
