const registerRoute = require('./features/register/registerRoutes.js');
const profileRoute = require('./features/profile/profileRoutes.js');
const dashboardRoute = require('./features/dashboard/dashboardRoutes.js')
const blogRoute = require('./features/blog/blogRoutes.js')

module.exports = app => {
    registerRoute(app);
    profileRoute(app);
    dashboardRoute(app);
    blogRoute(app);
}