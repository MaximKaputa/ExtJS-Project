Ext.ns('App.jsonStore.peopleJsonStore');

var peopleJsonStore = new Ext.data.JsonStore({
    url: 'https://swapi.co/api/people',
    root: 'results',
    fields:[{
        name:'name'
    },
    {
        name:'height',
        type: 'float'
    },
    {
        name: 'mass'
    },
    {
        name:'hair_color'
    },
    {
        name: 'skin_color'
    },
    {
        name: 'eye_color'
    },
    {
        name:'birth_year'
    },
    {
        name: 'gender'
    }
]
 
 });


App.jsonStore.peopleJsonStore.createPeopleJsonStore = function () {


    var clm = [
        {
            id: 'name',
            header: 'Names',
            width: 160,
            sortable: true,
            dataIndex: 'name'
        },
        {
            id: 'height',
            header: 'Height',
            width: 160,
            sortable: true,
            dataIndex: 'height'
        },
        {
            id: 'mass',
            header: 'Mass',
            width: 160,
            sortable: true,
            dataIndex: 'mass'
        },
        {
            id: 'hair_color',
            header: 'Hair color',
            width: 160,
            sortable: true,
            dataIndex: 'hair_color'
        },
        {
            id: 'skin_color',
            header: 'Skin color',
            width: 160,
            sortable: true,
            dataIndex: 'skin_color'
        },
    ]



    var grid2 = Ext.create({
        xtype: 'grid',
        fieldLabel: 'Star Wars',
        store: peopleJsonStore,
        stripeRows: true,
        height: 350,
        width: 800,
        stateful: true,
        columns: clm,
        listeners:{
            render: function(){
               peopleJsonStore.load()
            }
        }
        
    });


    var gridWin2 = Ext.create({
        xtype: 'window',
        height: 350,
        layout: 'form',

        items: grid2

    })
    return gridWin2
}