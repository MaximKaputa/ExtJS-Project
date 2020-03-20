// Ext.ns('App');
// Ext.ns('App.Componets');
// Ext.ns('App.Helper');
// Ext.ns('App.Layouts');
// // Если один пример на лайоут
// App.Layouts.createDemoLayoutVbox = function(){
//
// }
// // Если много примеров на лайоут
// Ext.ns('App.Layouts.Form');
// App.Layouts.Form.createDemo1 = function(){
//
// }
// App.Layouts.Form.createDemo2 = function(){
//
// }

Ext.ns('App.window');
App.window.createWindow = function(){
    
    var rg = {
        xtype: 'radiogroup',
        fieldLabel: 'Name',
        columns: 1,
        items: [
            {boxLabel: 'Male', name: 'rb'},
            {boxLabel: 'Female', name: 'rb'},
            {boxLabel: 'Other', name: 'rb'},
        ]
    }

    var sf = {
        fieldLabel: 'SliderField',
        xtype:'sliderfield'
    }
   

    var nf = {
        fieldLabel: 'NumberField',
        xtype:'numberfield'
    }



    var fp = new Ext.FormPanel({
        renderTo: Ext.getBody(),
        layout: 'vbox',
        frame : true,
        items: [
        {
            xtype: 'panel',
            layout: 'form',
            flex:1,
            items:[rg]
                
        },
        {
            xtype: 'panel',
            layout: 'form',
<<<<<<< HEAD
            flex:1,
=======
<<<<<<< HEAD
            flex:1,
=======
>>>>>>> Step 2
>>>>>>> Step 1 and 2
            items:[sf]
        },
        {
            xtype: 'panel',
            layout: 'form',
            flex:1,
            items:[nf]
        }
        ]
    });

    

    var MyWindow = Ext.create({
        xtype:'window',
        modal : false,
        layout : 'fit',
        border : false,
        frame : true,
        height : 400,
        width : 250,
        items : [fp]
        ,
        buttons : [ {
            text : 'Ok',
            handler : function() {
                MyWindow.close();
            }
        }]

        
    })
    return MyWindow;
}

    