
/**
 * Middleware function to render HTML. HTML-t add ki
 * @param {*} objRepo - The object repository.
 * @param view - The view to render.
 * @param {Object} viewData - The data to be passed to the view.
 * @const defaultViewData - Default data to be passed to the view.
 * @returns {Function} - The middleware function.
 */

const { defaultViewData } = require('../../mockdata/data');

module.exports = (objRepo, view, viewData = {}) => {
    return (req, res, next) => {
        const extraData = typeof viewData === 'function' ? viewData(req) : viewData;
        res.render(view, { ...defaultViewData, ...extraData });
        //return res.end(view);
    }
}
