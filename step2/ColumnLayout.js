Ext.ns('App.ColumnLayout')

App.ColumnLayout.createColumnLayout = function () {
    var hl = Ext.create({
        xtype: 'window', 
        layout: 'column',
        width: 500,
        height: 250,
        items:[
            {
                columnWidth: .25,
                xtype:'label',
                text: 'H-Box Layout',
            },
            {
                columnWidth: .25,
                xtype: 'panel',
                width: 100,
                height: 100,
            },
            {
                xtype:'form',
                frame : true,
                columnWidth: 1,
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
