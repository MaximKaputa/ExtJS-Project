Ext.ns('App.jsonStore.planetJsonStore');


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


App.jsonStore.planetJsonStore.createPlanetJsonStore = function () {


    var clm2 = [
       {id: 'name',
       header   : 'Names',
       width    : 160,
         sortable : true,
         dataIndex: 'name'
         },
         {id: 'rotation_period',
         header   : 'Rotation period',
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

     var gridWin2 = Ext.create({
        xtype: 'window',
        height: 500,
        layout: 'form',

         items: grid

    })
    return gridWin2
}