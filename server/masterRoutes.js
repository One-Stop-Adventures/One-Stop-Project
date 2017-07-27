const registerRoute = require('./features/register/registerRoutes.js');
const profileRoute = require('./features/profile/profileRoutes.js');
const dashboardRoute = require('./features/dashboard/dashboardRoutes.js');

module.exports = app => {
    registerRoute(app);
    profileRoute(app);
    dashboardRoute(app);
}