Ext.ns('App.accordionLayout')

App.accordionLayout.createAccordionLayout = function () {
    var acl = Ext.create({
        xtype: 'window', 
        layout:'accordion',
        width: 500,
        height: 500,
        defaults: {
            // applied to each contained panel
            bodyStyle: 'padding:15px'
        },
        layoutConfig: {
            titleCollapse: false,
            animate: true,
            activeOnTop: false,
            //sequence : true
        },
        items:[
            {
                title: 'Panel 1',
                xtype: 'panel',
                width: 300,
                height: 300,

            },
            {   title: 'Panel 2',
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


    return acl
}

