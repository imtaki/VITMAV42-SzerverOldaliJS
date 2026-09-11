/**
 * Middleware function to post a trainer. edzők küldése form-ról backendre
 * @param {*} objRepo - The object repository containing the trainer model.
 * @returns {Function} - The middleware function.
 */

module.exports = (objRepo) => {
    return (req, res, next) => {
        return next();
    }
}
