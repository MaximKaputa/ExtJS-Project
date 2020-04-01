Ext.ns('App.jsonStore');    
 App.jsonStore.createJsonStore = function () {


    var planetBtn =  {

        xtype: 'button',
        text: 'Planets',
        handler: function () {
            var wnd = App.jsonStore.planetJsonStore.createPlanetJsonStore()
            wnd.show()

        }
    }

    var peopleBtn =  {

        xtype: 'button',
        text: 'Peoples',
        handler: function () {
            var wnd = App.jsonStore.peopleJsonStore.createPeopleJsonStore()
            wnd.show()

        }
    }
      var gridWin = Ext.create({
         xtype: 'window',
         layout: 'form',
          items: [planetBtn,peopleBtn]

     })
     return gridWin
}