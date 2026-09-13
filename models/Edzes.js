const schema = require('mongoose').Schema;
const db = require('../config/db');

const Edzes = db.model('Edzes', new schema({
    name: { type: String},
    type: { type: String},
    duration: { type: Number},
    _trainerId: { type: schema.Types.ObjectId, ref: 'Trainer' }
}));

module.exports = Edzes;