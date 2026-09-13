
/**
 * Middleware function to load trainers count. betölti összes edző számot aggregálva
 * @param {*} objRepo - The object repository containing the trainer model.
 * @returns {Function} - The middleware function.
 */

module.exports = (objRepo) => {
    return async (req, res, next) => {
        try { 
            res.locals.trainersCount = await objRepo.EdzoModel.countDocuments();
            res.locals.stats = [
                { label: 'Személyi edzők', value: res.locals.trainersCount, icon: '<circle cx="12" cy="8" r="3.5" /><path d="M5 21c.7-4 3-6 7-6s6.3 2 7 6" />' }
            ];
            return next(); 
        }
        catch (err) { return next(err); }
    }
}
