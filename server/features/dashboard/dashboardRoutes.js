const dashboardCtrl = require('./dashboardCtrl');

module.exports = app => {
    app.post('/api/dashboard/:id', dashboardCtrl.createMeal);
    app.get('/api/dashboard', dashboardCtrl.getMeals);
    app.get('/api/dashboard/:id', dashboardCtrl.getMeal);
    app.delete('/api/dashboard/:id', dashboardCtrl.deleteMeal);
}