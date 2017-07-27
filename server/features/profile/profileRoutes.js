const profileCtrl = require ('./profileCtrl')

module.exports = app => {
    // app.delete('/user/:id', profileCtrl.deleteProfile) --- Add post-MVP
    app.post('/api/user/:id', profileCtrl.editProfile)
    app.post('/api/user/:id/trips', profileCtrl.createTrip)
    app.get('/api/user/:id/trips', profileCtrl.savedTrips)
    app.delete('/api/user/:id', profileCtrl.deleteProfile)
}
