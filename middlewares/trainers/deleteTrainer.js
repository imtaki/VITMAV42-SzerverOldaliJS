/**
 * Middleware function to delete a trainer. törli az edzőt és átirányít a usert /-re
 * @param {*} objRepo - The object repository containing the trainer model.
 * @returns {Function} - The middleware function.
 */

module.exports = (objRepo) => {
    return (req, res, next) => {
        return next();
    }
}
