Ext.ns('App.gridPanel');

App.gridPanel.createGridPanel = function () {
    var cars = [
        ['AUDI', 'A6' ,'2000'],
        ['BMW', 'X5','2400'],
        ['BUGGATI', 'Vision Gran Turismo', '3000']
    ];
 
     var arrStore = new Ext.data.ArrayStore({
         data: cars,
         fields: [{
             name: 'cars'
         },
         {
             name: 'model'
         },
         {
             name: 'weight',
             type: 'float'
         }
        ]
     });
 
     var grid = Ext.create({
         xtype: 'grid',
         fieldLabel: 'Cars',
         store: arrStore,
         stripeRows: true,
         displayField: 'car',
         height: 350,
         width: 600,
         stateful: true,
         columns: [
             {id: 'cars',
             header   : 'Cars',
             width    : 160,
             sortable : true,
             dataIndex: 'cars'
            },
            {
             id: 'model',
             header   : 'Car model',
             width    : 160,
             sortable : true,
             dataIndex: 'model'
            },
            {
             id: 'weight',
             header   : 'Car weight',
             width    : 160,
             sortable : true,
             dataIndex: 'weight'
            }
         ]
     });
 
     var gridWin = Ext.create({
         xtype: 'window',
         height: 400,
         layout: 'form',
         items: grid
     })

     return gridWin
}