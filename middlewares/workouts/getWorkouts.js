/**
 * Middleware function to get all workouts. edzések lekérdezése
 * @param {*} objRepo - The object repository containing the workout model.
 * @returns {Function} - The middleware function.
 */

module.exports = (objRepo) => {
    return (req, res, next) => {
        return next();
    }
}
