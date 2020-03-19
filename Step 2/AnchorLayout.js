Ext.ns('App.anchorLayout')

App.anchorLayout.createAnchorLayout = function () {
    var acl = Ext.create({
        xtype: 'window', 
        layout:'anchor',
        width: 500,
        height: 500,
        defaults: {
            // applied to each contained panel
            bodyStyle: 'padding:15px'
        },
        items:[
            {
                title: 'Panel 1',
                xtype: 'panel',
                width: '100%',
                height: 300,
            },
            {   
                title: 'Panel 2',
                xtype:'form',
                frame : true,
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
                    },
                    
                ]
            }
        ]
    })


    return acl
}


