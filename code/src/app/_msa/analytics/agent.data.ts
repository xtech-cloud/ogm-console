export let columns = {
    id: {
      title: 'Index',
      filter: false
    },
    softwareFamily: {
      title: 'Software Family',
      filter: false,
    },
    softwareVersion: {
      title: 'Software Version',
      filter: false,
    },
    systemFamily: {
      title: 'System Family',
      filter: false,
    },
    systemVersion: {
      title: 'System Version',
      filter: false,
    },
    deviceModel: {
      title: 'Device Model',
      filter: false,
    },
    deviceType: {
      title: 'Device Type',
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
