Ext.ns('App.jsonStore');

// var request = new XMLHttpRequest();
// request.open('GET', 'https://swapi.co/api/people/ ');
// request.responseType = 'json';
// request.send();


// request.onload = function(){
//     console.log(request)
// }

 
var peopleJsonStore = new Ext.data.JsonStore({
    url: 'https://swapi.co/api/people',
    root: 'results',
    fields:[{
        name:'name'
    },
    {
        name:'height',
        type: 'float'
    },
    {
        name: 'mass'
    },
    {
        name:'hair_color'
    },
    {
        name: 'skin_color'
    },
    {
        name: 'eye_color'
    },
    {
        name:'birth_year'
    },
    {
        name: 'gender'
    }
]
    // baseParams : {
    //         start : 0,
    //         limit : 100
    //     },
    // remoteSort : true,
    // sortInfo: {},
    // proxy : new Ext.data.HttpProxy({
    //     url : 'https://swapi.co/api/people'
    // }),
    // listeners:{
    //     load: function (store) {
    //         console.log('loaded',arguments)
    //         console.log('1')
    //     }
    // }
 });


 var planetJsonStore = new Ext.data.JsonStore({
    url: 'https://swapi.co/api/planets',
    root: 'results',
    fields:[{
            name:'name'
        },
        {
            name:'rotation_period',
            //type: 'float'
        },
        {
            name: 'orbital_period'
        },
        {
            name:'diameter',
            type: 'float'
        },
        {
            name: 'climate'
        },
        {
            name: 'gravity'
        },
        {
            name:'terrain'
        },
        {
            name: 'surface_water'
        }
    ]   
});



 App.jsonStore.createJsonStore = function () {

     //console.log(jsonStore)

     var clm = [
        {id: 'name',
        header   : 'Names',
        width    : 160,
          sortable : true,
          dataIndex: 'name'
          },
          {id: 'height',
          header   : 'Height',
          width    : 160,
          sortable : true,
          dataIndex: 'height'
          },
          {id: 'mass',
          header   : 'Mass',
          width    : 160,
          sortable : true,
          dataIndex: 'mass'
          },
          {id: 'hair_color',
          header   : 'Hair color',
          width    : 160,
          sortable : true,
          dataIndex: 'hair_color'
          },
          {id: 'skin_color',
          header   : 'Skin color',
          width    : 160,
          sortable : true,
          dataIndex: 'skin_color'
          },
     ]

     var clm2 = [
        {id: 'name',
        header   : 'Names',
        width    : 160,
          sortable : true,
          dataIndex: 'name'
          },
          {id: 'rotation_period',
          header   : 'rotation_period',
          width    : 160,
          sortable : true,
          dataIndex: 'rotation_period'
          },
          {id: 'orbital_period',
          header   : 'orbital_period',
          width    : 160,
          sortable : true,
          dataIndex: 'orbital_period'
          },
          {id: 'diameter',
          header   : 'diameter',
          width    : 160,
          sortable : true,
          dataIndex: 'diameter'
          },
          {id: 'climate',
          header   : 'climate',
          width    : 160,
          sortable : true,
          dataIndex: 'climate'
          },
     ]
            
     

      var grid = Ext.create({
        xtype: 'grid',
         fieldLabel: 'Star Wars',
         store: planetJsonStore,
         stripeRows: true,
         height: 350,
         width: 900,
         stateful: true,
         columns: clm2,
         listeners:{
             render: function(){
                planetJsonStore.load()
             }
         }
      });
      peopleJsonStore.load()

      var btn = Ext.create({
        xtype: 'button',
        text: 'people',
        listeners:{
            click: function(){
               grid.store = peopleJsonStore
               grid.columns = clm
               grid.render()
               console.log(grid.store)
               console.log(grid.columns)
            }
        }
    })

    //  setTimeout(function () {
    //     console.log(grid.store)
    //     console.log(grid.columns)
    //  },5000)
    // var jsonStore = new Ext.data.JsonStore({
    //     //url: 'https://swapi.co/api/people',
    //     root: 'results',
    //     fields:[
    //         'name'
    //     ],
    //     baseParams : {
    //             start : 0,
    //             limit : 100
    //         },
    //     remoteSort : true,
    //     sortInfo: {},
    //     proxy : new Ext.data.HttpProxy({
    //         url : 'https://swapi.co/api/people'
    //     }),
    //     listeners:{
    //         load: function (store) {
    //             console.log('loaded',arguments)
    //             console.log('1')
    //         }
    //     }
    //  });
    //  jsonStore.load()
    // console.log(request.response)
    //  var bb = JSON.parse(JSON.stringify(request.response.results))
    //  console.log( bb)

     //  var grid = Ext.create({
     //  });
      console.log(grid.store)
      var gridWin = Ext.create({
         xtype: 'window',
         height: 500,
         layout: 'form',

          items: [grid,btn]
         // items: grid

     })
     return gridWin
}