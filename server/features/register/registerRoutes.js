const registerCtrl = require('./registerCtrl');

module.exports = app => {
    app.post('/api/register', registerCtrl.createProfile);
}
