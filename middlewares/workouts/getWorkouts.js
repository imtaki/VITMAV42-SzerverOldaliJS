/**
 * Middleware function to get all workouts. edzések lekérdezése
 * @param {*} objRepo - The object repository containing the workout model.
 * @returns {Function} - The middleware function.
 */

module.exports = (objRepo) => {
    return async (req, res, next) => {
        try {
            const workouts = await objRepo.EdzesModel.find().populate('_trainerId').sort({ _id: -1 });
            res.locals.workouts = workouts.map(require('../utility/format').workoutView);
            return next();
        } catch (err) { return next(err); }
    }
}
