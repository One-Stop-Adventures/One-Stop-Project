
const dashboardCtrl = require('./dashboardCtrl');

module.exports = app => {
    app.post('/api/dashboard/:id/meal', dashboardCtrl.createMeal);
    app.get('/api/dashboard/meal', dashboardCtrl.getMeals);
    app.get('/api/dashboard/:id/meal', dashboardCtrl.getMeal);
    app.delete('/api/dashboard/:id/meal', dashboardCtrl.deleteMeal);
  
    app.post('/api/dashboard/:id/todo', dashboardCtrl.addToDo)
    app.delete('/api/dashboard/:id/todo', dashboardCtrl.deleteToDo)

}