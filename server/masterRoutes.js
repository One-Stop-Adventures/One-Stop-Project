const registerRoute = require('./features/register/registerRoutes.js');
const profileRoute = require('./features/profile/profileRoutes.js');

module.exports = app => {
    registerRoute(app);
    profileRoute(app);

}