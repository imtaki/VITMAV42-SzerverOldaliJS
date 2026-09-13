/**
 * Middleware function to update a trainer. edzők módosítása form-ról backendre
 * @param {*} objRepo - The object repository containing the trainer model.
 * @returns {Function} - The middleware function.
 */

module.exports = (objRepo) => {
    return async (req, res, next) => {
        try {
            await objRepo.EdzoModel.findByIdAndUpdate(req.params.id, {
                name: req.body.nev, initial: req.body.nev?.charAt(0).toUpperCase(),
                age: Number(req.body.kor), height: Number(req.body.magassag),
                certified: req.body.certifikacio === 'true'
            }, { runValidators: true });
            return res.redirect('/trainers');
        } catch (err) { return next(err); }
    }
}
