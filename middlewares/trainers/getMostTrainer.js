/**
 * Middleware function to get the trainer with most workouts. edzők legtöbb edzéssel lekérdezés
 * @param {*} objRepo - The object repository containing the trainer model.
 * @returns {Function} - The middleware function.
 */

module.exports = (objRepo) => {
    return async (req, res, next) => {
        try {
            const result = await objRepo.EdzesModel.aggregate([
                { $group: { _id: '$_trainerId', workoutCount: { $sum: 1 } } },
                { $sort: { workoutCount: -1 } }, { $limit: 1 },
                { $lookup: { from: 'edzos', localField: '_id', foreignField: '_id', as: 'trainer' } },
                { $unwind: '$trainer' }
            ]);
            res.locals.trainer = result[0]?.trainer || null;
            res.locals.workoutCount = result[0]?.workoutCount || 0;
            return next();
        } catch (err) { return next(err); }
    }
}
