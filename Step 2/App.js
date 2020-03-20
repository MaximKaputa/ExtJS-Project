Ext.ns('App');
Ext.onReady(function(){
  var myApp = Ext.create({
    xtype: 'window',
    items:[
        {
          xtype: 'button',
          text:'Layout fit',
          handler: function(){
            var wnd = App.window.createWindow()
            wnd.show()
          }
        },
        {
          xtype: 'button',
          text:'Absolute Layout',
          handler: function(){
            var wnd1 = App.absoluteLayout.createAbsoluteLayout()
            wnd1.show()
          }
        },
        {
          xtype: 'button',
          text:'Accordion Layout',
          handler: function(){
            var wnd2 = App.accordionLayout.createAccordionLayout()
            wnd2.show()
          }
        },
        {
          xtype: 'button',
          text:'anchor Layout',
          handler: function(){
            var wnd3 = App.anchorLayout.createAnchorLayout()
            wnd3.show()
          }
        },
        {
          xtype: 'button',
          text:'Border Layout',
          handler: function(){
            var wnd4 = App.borderLayout.createBorderLayout()
            wnd4.show()
          }
        },
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
        {
          xtype: 'button',
          text:'H-Box Layout',
          handler: function(){
            var wnd5 = App.hBoxLayout.createHboxLayout()
            wnd5.show()
          }
        },
        {
          xtype: 'button',
          text:'V-Box Layout',
          handler: function(){
            var wnd6 = App.vBoxLayout.createVboxLayout()
            wnd6.show()
          }
        },
        {
          xtype: 'button',
          text:'Column Layout',
          handler: function(){
            var wnd7 = App.ColumnLayout.createColumnLayout()
            wnd7.show()
          }
        }
>>>>>>> Step 2
>>>>>>> Step 1 and 2
        
    ]
  })
  myApp.show()

});