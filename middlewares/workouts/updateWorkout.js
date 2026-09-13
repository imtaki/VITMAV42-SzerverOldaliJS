/**
 * Middleware function to update a workout. edzés módosítása form-ról backendre
 * @param {*} objRepo - The object repository containing the workout model.
 * @returns {Function} - The middleware function.
 */

module.exports = (objRepo) => {
    return async (req, res, next) => {
        try {
            await objRepo.EdzesModel.findByIdAndUpdate(req.params.id, {
                name: req.body.nev, type: req.body.tipus,
                duration: Number(req.body.idotartam), _trainerId: req.body.edzo
            }, { runValidators: true });
            return res.redirect('/workouts');
        } catch (err) { return next(err); }
    }
}
