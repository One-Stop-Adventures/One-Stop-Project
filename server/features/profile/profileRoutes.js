const profileCtrl = require ('./profileCtrl')

module.exports = app => {
//Profile Endpoints
    app.post('/api/user/:id', profileCtrl.editProfile)
    app.delete('/api/user/:id', profileCtrl.deleteProfile)
//Trip Endpoints
    app.post('/api/user/:id/trips', profileCtrl.createTrip)
    app.get('/api/user/:id/trips', profileCtrl.savedTrips)
    app.delete('/api/user/:id/trips/:trip_id', profileCtrl.deleteTrip)
}
