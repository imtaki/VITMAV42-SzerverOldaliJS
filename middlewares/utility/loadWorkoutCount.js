/**
 * Middleware function to load workouts count. betölti összes edzés számát aggregálva
 * @param {*} objRepo - The object repository containing the workout model.
 * @returns {Function} - The middleware function.
 */

module.exports = (objRepo) => {
    return (req, res, next) => {
        // res.locals.workoutsCount = objRepo.data.workouts.getCount();
        next();
    }
}
