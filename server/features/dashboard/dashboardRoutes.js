
const dashboardCtrl = require('./dashboardCtrl');

module.exports = app => {
//Meals Endpoints
    app.post('/api/dashboard/:trip_id/meal', dashboardCtrl.createMeal);

    app.get('/api/dashboard/:trip_id/meal', dashboardCtrl.getMeals);
    app.get('/api/dashboard/:trip_id/meal/:meal_id', dashboardCtrl.getMeal);
    app.delete('/api/dashboard/meal/:meal_id', dashboardCtrl.deleteMeal);

//Todo Endpoints
    app.post('/api/dashboard/:trip_id/todo', dashboardCtrl.addToDo)
    app.delete('/api/dashboard/:todo_id/todo', dashboardCtrl.deleteToDo)
    app.get('/api/dashboard/:trip_id/todo', dashboardCtrl.getToDo)
//Packing List Endpoints
    app.post('/api/dashboard/:trip_id/packingList', dashboardCtrl.addPackItem)
    app.delete('/api/dashboard/packingList/:item_id', dashboardCtrl.deletePackItem)
    app.get('/api/dashboard/:trip_id/packingList', dashboardCtrl.getPackItems)

}
