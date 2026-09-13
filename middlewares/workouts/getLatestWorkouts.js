/**
 * Middleware function to get the latest workouts. utolsó 3 edzés lekérdezése
 * @param {*} objRepo - The object repository containing the workout model.
 * @returns {Function} - The middleware function.
 */

module.exports = (objRepo) => {
    return async (req, res, next) => {
        try {
            const workouts = await objRepo.EdzesModel.find().populate('_trainerId').sort({ _id: -1 }).limit(3);
            res.locals.latestWorkouts = workouts.map(require('../utility/format').workoutView);
            return next();
        } catch (err) { return next(err); }
    }
}
