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
         //  {
         //      xtype: 'button',
         //      text: 'Panel',
         //      handler: function () {
         //          var panels =App.Panels.createPanel()
         //          panels.show()
         //
         //      }
         // }
      ]
  }).show()
})