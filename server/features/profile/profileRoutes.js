const profileCtrl = require ('./profileCtrl')

module.exports = app => {
    // app.delete('/user/:id', profileCtrl.deleteProfile) --- Add post-MVP
    app.post('/user/:id', profileCtrl.editProfile)
}
