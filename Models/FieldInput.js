const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fieldInput = new Schema({
    input: String
});

module.exports = mongoose.model('input', fieldInput, 'input');
