Ext.ns('App');
Ext.onReady(function(){
  var myApp = Ext.create({
    xtype: 'window',
    items:[
        {
          xtype: 'button',
          text:'First Step',
          handler: function(){
            var wnd = App.window.createWindow()
            wnd.show()
          }
        },
        {
          xtype: 'button',
          text:'Layout',
          // handler: function(){
          //   var wnd = App.window.createWindow()
          //   wnd.show()
          // }
        }
    ]
  })
  myApp.show()

});