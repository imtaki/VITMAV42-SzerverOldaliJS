/**
 * Middleware function to get the latest workouts. utolsó 3 edzés lekérdezése
 * @param {*} objRepo - The object repository containing the workout model.
 * @returns {Function} - The middleware function.
 */

module.exports = (objRepo) => {
    return (req, res, next) => {
        return next();
    }
}
