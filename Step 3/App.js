Ext.ns('App');
Ext.onReady(function () {
  Ext.create({
      xtype: 'window',
      height: 200,
      width: 200,
      buttonAlign : 'center',
      items:[
          {

              xtype: 'button',
              text: 'ComboBox',
              handler: function () {
                  var wnd = App.ComboBox.createComboBox()
                  wnd.show()

              }
          },
          {
              xtype: 'button',
              text: 'Grid Panel',
              handler: function () {
                  var wnd1 = App.gridPanel.createGridPanel()
                  wnd1.show()
         
              }
         },
         {
            xtype: 'button',
            text: 'JsonStore Panel',
            handler: function () {
                var wnd2 = App.jsonStore.createJsonStore()
                wnd2.show()
       
            }
       }
      ]
  }).show()
})