/**
 * Middleware function to load workouts count. betölti összes edzés számát aggregálva
 * @param {*} objRepo - The object repository containing the workout model.
 * @returns {Function} - The middleware function.
 */

module.exports = (objRepo) => {
    return async (req, res, next) => {
        try { 
            res.locals.workoutsCount = await objRepo.EdzesModel.countDocuments();
            res.locals.stats = [
                ...(res.locals.stats || []),
                { label: 'Edzések', value: res.locals.workoutsCount, icon: '<path d="M7 4v16M17 4v16M4 8h16M4 16h16" />' }
            ];
            return next(); 
        }
        catch (err) { return next(err); }
    }
}
