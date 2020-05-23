export let columns = {
    id: {
      title: 'Index',
      filter: false
    },
    uid : {
      title: 'UID',
      filter: false,
    },
    number : {
      title: 'Number',
      filter: true,
    },
    consumer : {
      title: 'Consumer',
      filter: true,
    },
    createdAt: {
      title: 'Created At',
      filter: false,
    },
}

export let settings = {
  noDataMessage: '',
  actions: {
    columnTitle: 'Actions',
    add: false,
    edit: false,
    delete: false,
    position: 'right',
    custom:[
      {
          name: 'Download',
          title: '<div class="btn btn-sm btn-info waves-effect waves-light">Download</div> ', 
      },
    ],
  },
  pager: {  
    display: true,  
    perPage: 10  
  },
  columns: columns,
};
