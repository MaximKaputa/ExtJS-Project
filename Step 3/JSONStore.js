Ext.ns('App.jsonStore');

// var request = new XMLHttpRequest();
// request.open('GET', 'https://swapi.co/api/people/ ');
// request.responseType = 'json';
// request.send();




// Ext.Ajax.request({
//     url: 'https://swapi.co/api/people',
//     success: function(response, options){
//      var json  = JSON.parse(response.responseText)
//         console.log(json.results);
//     },
//     failure: function(response, options){
//         alert("Ошибка: " + response.statusText);
//     }
// });
 


 App.jsonStore.createJsonStore = function () {

     setTimeout(function () {
        console.log(jsonStore.data)
     },5000)
    var jsonStore = new Ext.data.JsonStore({
        //url: 'https://swapi.co/api/people',
        root: 'results',
        fields:[
            'name'
        ],
        baseParams : {
                start : 0,
                limit : 100
            },
        remoteSort : true,
        sortInfo: {},
        proxy : new Ext.data.HttpProxy({
            url : 'https://swapi.co/api/people'
        }),
        listeners:{
            load: function (store) {
                console.log('loaded',arguments)
                console.log('1')
            }
        }
     });
     jsonStore.load()
    // console.log(request.response)
    //  var bb = JSON.parse(JSON.stringify(request.response.results))
    //  console.log( bb)

     //  var grid = Ext.create({
     //  });
      var gridWin = Ext.create({
         xtype: 'window',
         height: 400,
         layout: 'form',
         // items: grid
     })
     return gridWin
}