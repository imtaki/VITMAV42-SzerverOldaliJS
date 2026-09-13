/**
 * Middleware function to delete a workout. törli az edzést és átirányít a usert /-re
 * @param {*} objRepo - The object repository containing the workout model.
 * @returns {Function} - The middleware function.
 */

module.exports = (objRepo) => {
    return async (req, res, next) => {
        try {
            await objRepo.EdzesModel.findByIdAndDelete(req.params.id);
            return res.redirect('/workouts');
        }
        catch (err) { return next(err); }
    }
}
