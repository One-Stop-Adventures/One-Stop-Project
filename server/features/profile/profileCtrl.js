module.exports = {

    editProfile: function( req, res, next ){
        
        req.app.get('db')
            .edit_user([ req.params.id, req.body.username, req.body.password, req.body.email, req.body.first_name, req.body.last_name, req.body.city, req.body.state, req.body.profile_pic ])
            .then(( user ) => {
                res.status(200).json(user)
            })
            .catch(( err ) => {
                console.log(err)
                res.status(500).json(err)
            })
    }

}


    // ADD POST-MVP
    // deleteProfile: function ( req, res, next ) {
    //     req.app.get('db')
    //         .delete_user([ req.user.id ])
    //         .then(() => {
    //             res.status(200).json('Profile Deleted')
    //         })
    //         .catch((err) => {
    //             res.status(500).json(err)
    //         })
    // },