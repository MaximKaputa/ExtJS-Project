Ext.ns('App.jsonStore');

Ext.Ajax.request({
    url: 'https://swapi.co/api/people',
    success: function(response, options){
     var json  = JSON.parse(response.responseText)
        console.log(json.results);
    },
    failure: function(response, options){
        alert("Ошибка: " + response.statusText);
    }
});  
 


 App.jsonStore.createJsonStore = function () {
    var jsonStore = new Ext.data.JsonStore({
        url: 'https://swapi.co/api/people/1',
     });
    console.log()
      var grid = Ext.create({
      });
      var gridWin = Ext.create({
         xtype: 'window',
          height: 400,
          layout: 'form',
          items: grid
     })
     //return gridWin
}