Ext.ns('App.absoluteLayout')

App.absoluteLayout.createAbsoluteLayout = function () {
      





    var al = Ext.create({
        xtype: 'window', 
        layout: 'absolute',
        width: 500,
        height: 500,
        items:[
            {
                x: '45%',
                y: 30,
                xtype:'label',
                text: 'Absolute Layout'
            },
            {
                xtype: 'panel',
                x:0,
                y: 60,
                anchor: '100% 50%'
            },
            {
                xtype:'form',
                frame : true,
                x:'0%',
                y:250,
                anchor: '100% 100%',
                items: [
                    {
                        xtype: 'textfield',
                        fieldLabel: 'First name',
                        name: 'first-name',
                        allowBlank: false
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Last name',
                        name: 'last-name',
                        allowBlank: false
                    },
                    {
                        xtype: 'textfield',
                        fieldLabel: 'Bober',
                        name: 'bober-name',
                        allowBlank: false
                    }
                ]
            }
        ]
    })


    return al
}




// Ext.layout.FitLayout
// ** Ext.layout.AccordionLayout
// ** Ext.layout.Absolute
// ** Ext.layout.Column
// ** Ext.layout.HBoxLayout
// ** Ext.layout.VBox
// ** Ext.layout.Form - Это ранее использовалось в Ext.form.FormPanel
// ** Ext.layout.BorderLayout