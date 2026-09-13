/**
 * Middleware function to post a workout. edzés küldése form-ról backendre
 * @param {*} objRepo - The object repository containing the workout model.
 * @returns {Function} - The middleware function.
 */

module.exports = (objRepo) => {
    return async (req, res, next) => {
        try {
            const workout = await objRepo.EdzesModel.create({
                name: req.body.nev, type: req.body.tipus,
                duration: Number(req.body.idotartam), _trainerId: req.body.edzo
            });
            res.locals.workout = workout;
            return res.redirect('/workouts');
        } catch (err) { return next(err); }
    }
}
