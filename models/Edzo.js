const schema = require('mongoose').Schema;
const db = require('../config/db');

const Edzo = db.model('Edzo', new schema({
    name: { type: String},
    initial: { type: String },
    age: { type: Number },
    height: { type: Number },
    certified: { type: Boolean }
}));

module.exports = Edzo;