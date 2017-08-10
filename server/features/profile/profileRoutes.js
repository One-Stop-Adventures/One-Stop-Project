const profileCtrl = require ('./profileCtrl')

module.exports = app => {
//Profile Endpoints
    app.get('/api/user/:id', profileCtrl.getUser)
    app.put('/api/user/:id', profileCtrl.editProfile)
    app.delete('/api/user/:id', profileCtrl.deleteProfile)
    app.put('/api/pic/:id', profileCtrl.editPic)
//Trip Endpoints
    app.post('/api/user/:id/trips', profileCtrl.createTrip)
    app.get('/api/user/:id/trips', profileCtrl.savedTrips)
    app.delete('/api/user/:id/trips/:trip_id', profileCtrl.deleteTrip)
//Log Endpoings
    app.get('/api/user/log/:id', profileCtrl.getLogs)
    app.post('/api/user/log', profileCtrl.createLog)
    app.get('/api/log/:id', profileCtrl.getLog)
}
