Ext.ns('App.borderLayout')

App.borderLayout.createBorderLayout = function () {
    var bl = Ext.create({
        xtype: 'window', 
        layout:'border',
        width: 500,
        height: 500,
        defaults: {
            // applied to each contained panel
            bodyStyle: 'padding:15px'
        },
        items:[
            {   
                title: 'South Panel',
                xtype: 'panel',
                region: 'south',
                height: 150,
                items:[
                    {
                        html: '<p>South Panel</p>'
                    }
                ]
            },
            {
                title: 'West Panel',
                xtype: 'panel',
                region:'west',
                width: 150,
                items:[
                    {
                        html: '<p>West Panel</p>'
                    }
                ]
            },
            {
                title: 'Center Panel',
                xtype: 'panel',
                region: 'center',
                items:[
                    {
                        html: '<p>Central Panel</p>'
                    }
                ]
            }
        ]
    })
        return bl

}