let Input = require('../Models/FieldInput')

let postController = function (req, res) {
    let id = `5edc13abc01d38b853c6417c`

    let Body = req.body;

    if(!Body.input || Body.input == null || Body.input == '') {
        res.status(401).send('Нет данных')
    } else {
        let item = {
            input: Body.input
        }
        Input.updateOne({_id: id}, { $set: item }, (error, obj) => {
            if(error) {
                res.status(401).send('Хьюстон у нас проблемы')
            }
            if(!obj) {
                res.status(401).send('Нет данных')
            } else {
                res.send(obj)
            }
        })
    }
}

module.exports = postController;
