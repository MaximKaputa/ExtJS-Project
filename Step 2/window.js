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
        xtype:'sliderfield',
        width: 100
    }
   

    var nf = {
        fieldLabel: 'NumberField',
        xtype:'numberfield'
    }

    var df = {
        fieldLabel: 'Display',
        xtype: 'displayfield',
        name: 'dp1',
        width: 100
    }

    var btn = {
        xtype: 'button',
        text: 'banan',
        handler: function () {
            fp.getForm().setValues({
                dp1: 'I`m display 1'
            })
        }
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
            flex:1,
            items:[sf]
        },
        {
            xtype: 'panel',
            layout: 'form',
            flex:1,
            items:[nf]
        },
        {
            xtype: 'panel',
            layout: 'form',
            flex:1,
            items:[df,btn]
        }
        ]
    });

    

    var MyWindow = Ext.create({
        xtype:'window',
        modal : false,
        layout : 'fit',
        border : false,
        frame : true,
        height : 500,
        width : 450,
        items : [fp],
        buttons : [ {
            text : 'Ok',
            handler : function() {
                MyWindow.close();
            }
        }]

        
    })
    return MyWindow;
}

    