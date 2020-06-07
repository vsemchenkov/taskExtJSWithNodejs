let Input = require('../Models/FieldInput')

let getController = (req, res) => {
    let paramsValue = req.params.id;
    let resBody = req.body;

    if(!paramsValue || paramsValue == null) {
        res.status('401').send('no value');
    } else {

        Input.find({_id: req.params.id}, function(error, obj) {
            if(error) {
                res.status(401).send('Хьюстон у нас проблемы')
            }
            if(!resBody) {
                res.status(401).send('Нет данных');
            } else {
                res.send(obj);
            }
        })
    }
}

module.exports = getController;
