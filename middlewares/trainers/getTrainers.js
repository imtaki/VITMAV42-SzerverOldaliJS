/**
 * Middleware function to get all trainers. edzők lekérdezése
 * @param {*} objRepo - The object repository containing the trainer model.
 * @returns {Function} - The middleware function.
 */

module.exports = (objRepo) => {
    return async (req, res, next) => {
        try {
            const trainers = await objRepo.EdzoModel.find().sort({ name: 1 });
            res.locals.trainers = trainers.map(require('../utility/format').trainerView);
            return next();
        } catch (err) { return next(err); }
    }
}
