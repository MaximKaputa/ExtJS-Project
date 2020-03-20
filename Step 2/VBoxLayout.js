Ext.ns('App.vBoxLayout')

App.vBoxLayout.createVboxLayout = function () {
    var vl = Ext.create({
        xtype: 'window', 
        layout: 'vbox',
        width: 500,
        height: 500,
        layoutConfig: {
            padding:'5',
            align:'center'
        },
        items:[
            {
                align:'top',
                xtype:'label',
                text: 'H-Box Layout',
            },
            {
                xtype: 'panel',
                width: 100,
                height: 100,
            },
            {
                xtype:'form',
                frame : true,
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


    return vl
}
