Ext.onReady(function () {

    Ext.define('Model', {
        extend: 'Ext.data.Model',
        fields: ['input']
    });

    let store = Ext.create('Ext.data.Store', {
        model: 'Model',
        proxy: {
            type: 'ajax',
            url: 'http://localhost:3000/api/5edc13abc01d38b853c6417c',
            reader: {
                type: 'json',
                root: 'data'
            }
        },
        autoLoad: true,
        remoteSort: true
    });

    let grid = Ext.create('Ext.grid.Panel', {
        store: store,
        columns: [
            {
                text: 'Input',
                dataIndex: 'input'
            }
        ],
        height: 350,
        width: 600,
        title: 'Вывод данных из Input',
        renderTo: 'grid1',
        bbar: Ext.create('Ext.PagingToolbar', {
            store: store
        })
    });


    let formPanel = Ext.create('Ext.form.Panel', {
        url: '/api/post',
        items: [{
            xtype: 'form',
            bodyPadding: 10,
            title: 'Input',
            items: [{
                xtype: 'textfield',
                fieldLabel: 'Input:',
                name: 'input'
            }, {
                xtype: 'button',
                text: 'отправить',
                handler: function () {
                    let form = this.up('form'); // get the form panel
                    let data = form.getForm().getValues();
                    Ext.Ajax.request({
                        url: 'http://localhost:3000/api/post',
                        method: "POST",
                        jsonData: data,
                        success: function () {
                            console.log('Данные отправлены: ', data)
                        },
                        failure: function () {
                            console.log('Хьюстон у нас проблемы с: ', data)
                        }
                    })
             }
            }]
        }],
        renderTo: 'fieldInput'
    });
});
