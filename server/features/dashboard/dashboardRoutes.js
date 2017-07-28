
const dashboardCtrl = require('./dashboardCtrl');

module.exports = app => {
//Meals Endpoints
    app.post('/api/dashboard/:id/meal', dashboardCtrl.createMeal);
    app.get('/api/dashboard/meal', dashboardCtrl.getMeals);
    app.get('/api/dashboard/:id/meal', dashboardCtrl.getMeal);
    app.delete('/api/dashboard/:id/meal', dashboardCtrl.deleteMeal);
//Todo Endpoints  
    app.post('/api/dashboard/:id/todo', dashboardCtrl.addToDo)
    app.delete('/api/dashboard/:id/todo', dashboardCtrl.deleteToDo)
    app.get('/api/dashboard/:id/todo', dashboardCtrl.getToDo)
//Packing List Endpoints
    app.post('/api/dashboard/:id/packingList', dashboardCtrl.addPackItem)
    app.delete('/api/dashboard/:id/packingList/:item_id', dashboardCtrl.deletePackItem)
    app.get('/api/dashboard/:id/packingList', dashboardCtrl.getPackItems)
    
}