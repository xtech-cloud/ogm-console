export let columns = {
    id: {
      title: 'Index',
      filter: false
    },
    number : {
      title: 'Number',
      filter: false,
    },
    expiry: {
      title: 'Expiry',
      filter: false,
      type: 'html',
      valuePrepareFunction: data => { 
          if(0 == data) {
              return `<span class="label label-warning">永久</span>`;
          }else{
              return `<span class="label label-info">`+data+`天</span>`;
          }
      }
    },
    capacity: {
      title: 'Capacity',
      filter: false,
      type: 'html',
      valuePrepareFunction: data => { 
          var str = data.split("/");
          if(str[0] == '0') {
              return `<span class="label label-success">`+data+`</span>`;
          }
          else if(str[0] == str[1]) {
              return `<span class="label label-danger">`+data+`</span>`;
          }
          else {
              return `<span class="label label-primary">`+data+`</span>`;
          }
      },
    },
    ban: {
      title: 'Suspend',
      filter: false,
      type: 'html',
      valuePrepareFunction: data => { 
          if(0 == data) {
              return `<span></span>`;
          }
          else {
              return `<span class="label label-danger">`+data+`</span>`;
          }
      },
    },
    createdAt: {
      title: 'Created At',
      filter: false,
    },
    activatedAt: {
      title: 'Activated At',
      filter: false,
    },
    storage: {
      title: 'Storage',
      filter: false,
      type: 'html',
      valuePrepareFunction: data => { 
          if(data.length>16) {
              return data.substr(0,16) + ' ...'
          }
          return data;
      },
    },
    profile: {
      title: 'Profile',
      filter: false,
      type: 'html',
      valuePrepareFunction: data => { 
          if(data.length>16) {
              return data.substr(0,16) + ' ...'
          }
          return data;
      },
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
          name: 'activate',
          title: '<div class="btn btn-sm btn-info waves-effect waves-light">Activate</div> ', 
      },
      {
          name: 'suspend',
          title: '<div class="btn btn-sm btn-warning waves-effect waves-light">Suspend</div> ', 
      },
      {
          name: 'detail',
          title: '<div class="btn btn-sm btn-primary waves-effect waves-light">Detail</div>', 
      }
    ],
  },
  pager: {  
    display: true,  
    perPage: 10  
  },
  columns: columns,
};
