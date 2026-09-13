/**
 * Middleware function to get a trainer. edző lekérdezése
 * @param {*} objRepo - The object repository containing the trainer model.
 * @returns {Function} - The middleware function.
 */

module.exports = (objRepo) => {
    return async (req, res, next) => {
        const search = req.query.search || '';
        try {
            const trainers = await objRepo.EdzoModel
            .find({ name: { $regex: search, $options: 'i' } })
            .sort({ name: 1 });
            res.locals.trainers = trainers;
            return next();
        } catch (err) { return next(err); }
    }
}
