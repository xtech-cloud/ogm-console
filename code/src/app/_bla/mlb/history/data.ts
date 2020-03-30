export let columns = {
    id: {
      title: 'Index',
      filter: false
    },
    uuid: {
      title: 'UUID',
      filter: false,
    },
    status: {
      title: 'Status',
      filter: false,
      type: 'html',
      valuePrepareFunction: data => {
          if ("SUCCESS" == data) {
              return `<span class="label label-success">`+data+`</span>`;
          }else if ("FAILED" == data) {
              return `<span class="label label-danger">`+data+`</span>`;
          }else if ("CANCELED" == data) {
              return `<span class="label label-warning">`+data+`</span>`;
          }else if ("INPROGRESS" == data) {
              return `<span class="label label-info">`+data+`</span>`;
          }
      },
    },
    createdAt: {
      title: 'Created At',
      filter: false
    },
    updatedAt: {
      title: 'Updated At',
      filter: false
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
    custom: [
        {
            name: 'open',
            title: '<div class="btn btn-sm btn-primary waves-effect waves-light" ><span class="btn-label"><i class="fa fa-eye"></i></span>Review</div>',
        }
    ]
  },
  pager: {  
    display: true,  
    perPage: 10  
  },
  columns: columns,
};
