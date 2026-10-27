const { trainers, getCount } = require('../../mockdata/data.js');

/**
 * Middleware function to load trainers count. betölti összes edző számot aggregálva
 * @param {*} objRepo - The object repository containing the trainer model.
 * @returns {Function} - The middleware function.
 */

module.exports = (objRepo) => {
    return (req, res, next) => {
        res.locals.trainersCount = getCount(trainers);
        next();
    }
}
