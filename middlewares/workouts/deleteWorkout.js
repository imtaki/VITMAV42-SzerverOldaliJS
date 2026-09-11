/**
 * Middleware function to delete a workout. törli az edzést és átirányít a usert /-re
 * @param {*} objRepo - The object repository containing the workout model.
 * @returns {Function} - The middleware function.
 */

module.exports = (objRepo) => {
    return (req, res, next) => {
        return next();
    }
}
