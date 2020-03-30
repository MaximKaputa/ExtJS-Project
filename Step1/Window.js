Ext.ns('App.Window');

App.Window.createWindow = function () {
    var formBlock = [
        {
            xtype: 'fieldset',
            title: 'Full Name',
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
                },
                {
                    xtype: 'radiogroup',
                    fieldLabel: 'Gender',
                    name: 'radio-group',
                    value: 'o',
                    columns: 1,
                    items: [
                        { boxLabel: 'Male', name: 'radioBtn', inputValue: 'm' },
                        { boxLabel: 'Female', name: 'radioBtn', inputValue: 'f' },
                        { boxLabel: 'Other', name: 'radioBtn', inputValue: 'o' },
                    ]
                },
            ]
        }]
    var DateAndCity = [{
        items: {
            xtype: 'fieldset',
            title: 'Date and City',
            items: [
                {
                    xtype: 'datefield',
                    fieldLabel: 'Birthday date',
                    name: 'birth-date',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'City',
                    name: 'birth-city',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    fieldLabel: 'Country',
                    name: 'birth-country',
                    allowBlank: false
                }
            ]
        }
    }];

    var Passport = [{
        xtype: 'fieldset',
        title: 'Passport',
        items: [
            {
                xtype: 'textfield',
                fieldLabel: 'Passport series',
                name: 'passport-series',
                allowBlank: false
            },
            {
                xtype: 'textfield',
                fieldLabel: 'Number Passport',
                name: 'passport-number',
                allowBlank: false
            },
            {
                xtype: 'datefield',
                width: 100,
                fieldLabel: 'Date of issue',
                name: 'date-of-issue',
                allowBlank: false
            },
            {
                xtype: 'datefield',
                width: 100,
                fieldLabel: 'Date end',
                name: 'date-end',
                allowBlank: false
            },
        ],

    }]


    var userInfo = [{
        xtype: 'fieldset',
        title: 'Additional Information',
        checkboxToggle: true,
        autoHeight: true,
        defaultType: 'textfield',
        collapsed: true,
        items: [
            {
                fieldLabel: 'Email',
                name: 'email',
                vtype: 'email',
            }
        ]
    }]

    var fp = new Ext.form.FormPanel({
        layout: 'form',
        frame: true,
        monitorValid: true,
        items: [formBlock, DateAndCity, Passport, userInfo],
        buttons: [{
            text: 'Sumbit',
            formBind: true,
            handler: function () {
                console.log(fp.getForm().getValues());
                fp.getForm().submit();


            }
        }, {
            text: 'SetValue',
            handler: function () {
                fp.getForm().setValues({
                    'birth-date': new Date(),
                    'birth-city': 'Warshava',
                    'first-name': 'Makson',
                    'last-name': 'Kaputa',
                    'bober-name': 'Bober',
                    'radioBtn': 'f',
                    'birth-country': 'Canada',
                    'passport-series': 'AE',
                    'passport-number': '313213',
                    'date-of-issue': new Date(),
                    'date-end': new Date()

                })
            }
        }]

    })

    var myWin = Ext.create({
        xtype: 'window',
        title: 'Window Panel',
        modal: false,
        border: true,
        width: '300',
        autoHeight: false,
        items: [fp]
    })
    return myWin
}