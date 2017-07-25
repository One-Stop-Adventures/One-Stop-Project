module.exports = {

    createProfile: function( req, res, next ){
        req.app.get('db')
            .register_user([req.body.username, req.body.password, req.body.email, req.body.first_name, req.body.last_name, req.body.city, req.body.state, req.body.profile_pic])
            .then((user) => {
                console.log('Profile Created!')
                res.status(200).json(user[0])
            })
            .catch((err) => {
                console.log(err)
                res.status(500).json('Failed to create profile')
            })
    }

}