/**
 * Middleware function to post a workout. edzés küldése form-ról backendre
 * @param {*} objRepo - The object repository containing the workout model.
 * @returns {Function} - The middleware function.
 */

module.exports = (objRepo) => {
    return (req, res, next) => {
        return next();
    }
}
