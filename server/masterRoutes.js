const registerRoute = require('./features/register/registerRoutes.js')

module.exports = app => {
    registerRoute(app);
}