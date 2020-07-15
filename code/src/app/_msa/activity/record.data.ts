export let columns = {
    id: {
      title: 'Index',
      filter: false
    },
    notification: {
      title: 'Notification',
      filter: false,
    },
    action: {
      title: 'Action',
      filter: false,
    },
    head: {
      title: 'Head',
      filter: false,
    },
    body: {
      title: 'Body',
      filter: false,
    },
    operatorLabel: {
      title: 'Operator Label',
      filter: false,
    },
    operatorType: {
      title: 'Operator Type',
      filter: false,
    },
    time: {
      title: 'Time',
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
