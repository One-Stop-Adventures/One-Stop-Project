const dashboardCtrl = require('./dashboardCtrl')

module.exports = app => {
    app.post('/api/dashboard/:id', dashboardCtrl.addToDo)
    app.delete('/api/dashboard/:id', dashboardCtrl.deleteToDo)
}