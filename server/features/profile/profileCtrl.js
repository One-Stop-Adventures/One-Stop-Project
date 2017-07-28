module.exports = {
//Profile Endpoints
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
    },
    deleteProfile: function ( req, res, next ) {
        req.app.get('db')
            .delete_user([ req.params.id ])
            .then(() => {
                res.status(200).json('Profile Deleted')
            })
            .catch((err) => {
                res.status(500).json(err)
            })
    },

//Trip Endpoints    
    savedTrips: function( req, res, next ){
        req.app.get('db')
            .saved_trips([ req.params.id ])
            .then(( trips ) => {
                console.log(trips)
                res.status(200).json(trips)
            })
            .catch(( err ) => {
                res.status(500).json( err )
            })
    },
    createTrip: function( req, res, next ){
        req.app.get('db')
            .create_trip([ req.params.id, req.body.trip_name, req.body.description, req.body.completed, req.body.start_date, req.body.end_date, req.body.location ])
            .then((trip) => {
                res.status(200).json('Trip created!')
            })
            .catch(( err ) => {
                console.log(err)
                res.status(200).json('Trip cannot be created!')
            })
    },
    deleteTrip: function( req, res, next ){
        console.log(req.params)
        req.app.get( 'db' )
            .delete_trip([ req.params.trip_id ])
            .then(() => {
                res.status( 200 ).json( 'Success' )
            })
            .catch(( err ) => {
                res.status( 500 ).json( 'Failed' )
            })
    }

}

