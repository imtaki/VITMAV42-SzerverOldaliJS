/**
 * Middleware function to render HTML. HTML-t add ki
 * @param {*} objRepo - The object repository.
 * @returns {Function} - The middleware function.
 */

module.exports = (objRepo) => {
    return (req, res, next) => {
        return next();
    }
}
