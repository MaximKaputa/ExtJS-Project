Ext.ns('App.ComboBox');

App.ComboBox.createComboBox = function () {
    var cars = [
        ['AUDI'],
        ['BMW'],
        ['BUGGATI']
    ];
 
     var arrStore = new Ext.data.ArrayStore({
         data: cars,
         fields: ['car']
     });
 
     var combo = Ext.create({
         xtype: 'combo',
         fieldLabel: 'Cars',
         store: arrStore,
         displayField: 'car',
         typeAhead: true,
         mode: 'local',
         //triggerAction: 'all'
     });
 
     var comboWin = Ext.create({
         xtype: 'window',
         height: 100,
         layout: 'form',
         items: combo
     })

     return comboWin
}