Ext.ns('App.hBoxLayout')

App.hBoxLayout.createHboxLayout = function () {
    var hl = Ext.create({
        xtype: 'window', 
        layout: 'hbox',
        width: 500,
        height: 500,
        layoutConfig: {
            padding:'5',
            align:'middle'
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


    return hl
}
