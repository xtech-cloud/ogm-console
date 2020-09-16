export let columns = {
    id: {
      title: 'Index',
      filter: false
    },
    uuid: {
      title: 'UUID',
      filter: false,
    },
    subject: {
      title: 'Subject',
      filter: false,
    },
    body: {
      title: 'Body',
      filter: false,
    },
    state: {
      title: 'State',
      filter: false,
      type: 'html',
      valuePrepareFunction: data => {
          if(-1 != data.indexOf("PENDING")) {
              return `<span class="label label-warning">Pending</span>`;
          } else if(-1 != data.indexOf("ACCEPTED")) {
              return '<span class="label label-info">Accepted</span>';
          } else if(-1 != data.indexOf("REJECTED")) {
              return '<span class="label label-danger">Rejected</span>';
          } else {
              return data;
          }
      },
    },
}

export let settings = {
  noDataMessage: '',
  actions: {
    columnTitle: '操作',
    add: false,
    edit: false,
    delete: false,
    position: 'right',
    custom: [
        {
            name: 'accept',
            title: '<div class="mrless btn btn-sm btn-info waves-effect waves-light">Accept</div>',
        },
        {
            name: 'reject',
            title: '<div class="mrless btn btn-sm btn-danger waves-effect waves-light">Reject</div>',
        }
    ]
  },
  pager: {  
    display: true,  
    perPage: 10  
  },
  columns: columns,
};
