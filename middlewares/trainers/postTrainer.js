/**
 * Middleware function to post a trainer. edzők küldése form-ról backendre
 * @param {*} objRepo - The object repository containing the trainer model.
 * @returns {Function} - The middleware function.
 */

module.exports = (objRepo) => {
    return async (req, res, next) => {
        try {
            const trainer = await objRepo.EdzoModel.create({
                name: req.body.nev, initial: req.body.nev?.charAt(0).toUpperCase(),
                age: Number(req.body.kor), height: Number(req.body.magassag),
                certified: req.body.certifikacio === 'true'
            });
            res.locals.trainer = trainer;
            return res.redirect('/trainers');
        } catch (err) { return next(err); }
    }
}
