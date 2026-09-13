/**
 * Middleware function to get a workout. edzés lekérdezése
 * @param {*} objRepo - The object repository containing the workout model.
 * @returns {Function} - The middleware function.
 */

module.exports = (objRepo) => {
    return async (req, res, next) => {
        try {
            const workout = await objRepo.EdzesModel.findById(req.params.id).populate('_trainerId');
            if (!workout) return res.status(404).json({ error: 'Workout not found' });
            res.locals.workout = require('../utility/format').workoutView(workout);
            return next();
        } catch (err) { return next(err); }
    }
}
