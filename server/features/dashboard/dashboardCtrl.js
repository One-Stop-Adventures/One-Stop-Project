module.exports = {

    getTrip: function(req, res, next) {
      req.app.get('db')
      .get_trip([req.params.trip_id])
      .then(trip=>{
        res.status(200).json(trip)
      })
      .catch(err=>{
        console.log('Theres an error dumbass')
        res.status(500).json(err)
      })

    },
//Meals endpoints
    createMeal: function (req, res, next) {

        console.log(req.params, req.body);


        req.app.get('db')
        .create_meal([req.params.trip_id, req.body.meal.day, req.body.meal.breakfast, req.body.meal.lunch, req.body.meal.dinner, req.body.meal.snack])
        .then((meal) => {
            console.log('Meal Created!')
            res.status(200).json(meal)
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json('Failed to create meal')
        })
    },
    getMeal: function (req, res, next) {
        req.app.get('db')
        .read_meal([req.params.meal_id])
        .then((meal) => {
            console.log('getMeal touched');
            res.status(200).json(meal)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
    },
    getMeals: function (req, res, next) {
        req.app.get('db')
        .read_meals([ req.params.trip_id ])
        .then((meals) => {
            console.log('getMeals touched')
            res.status(200).json(meals)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
    },
    deleteMeal: function (req, res, next) {
        req.app.get('db')
        .delete_meal([req.params.meal_id])
        .then(() => {
            res.status(200).json('Meal Deleted')
        })
        .catch((err) => {
            res.status(500).json(err)
        })
    },

//To-do endpoints
    addToDo: function( req, res, next ){
        req.app.get( 'db' )
            .add_to_do([ req.params.trip_id, req.body.item ])
            .then(( todo ) =>{
                console.log( todo )
                res.status( 200 ).json( todo )
            })
            .catch(( err ) =>{
                console.log( err )
                res.status(500).json( err )
            })
    },

    deleteToDo: function ( req, res, next){
        req.app.get( 'db' )
            //Currently, id is set to be hard coded. To-do id needs to be passed on to the list.
            .delete_to_do([ req.params.todo_id ])
            .then(() => {
                res.status( 200 ).json( 'success' )
            })
            .catch(( err ) => {
                console.log( err )
                res.status(500).json( 'failed to delete' )
            })
    },
    getToDo: function( req, res, next ){
        req.app.get( 'db' )
            .get_to_do([ req.params.trip_id ])
            .then(( todos ) => {
                res.status( 200 ).json( todos )
            })
            .catch((err) => {
                console.log(err)
                res.status(500).json('Failed')
            })
    },

//Packing List Endpoints
    addPackItem: function( req, res, next ) {
        req.app.get( 'db' )
            .add_pack_item([ req.params.trip_id, req.body.item ])
            .then(( item ) => {
                res.status( 200 ).json( item )
            })
            .catch(( err ) => {
                console.log( err )
                res.status( 500 ).json( err )
            })
    },
    deletePackItem: function( req, res, next ){
        req.app.get( 'db' )
            .delete_pack_item([ req.params.item_id])
            .then(() => {
                res.status( 200 ).json( 'Success' )
            })
            .catch(( err ) => {
                console.log( err )
                res.status( 500 ).json( 'Failure' )
            })
    },
    getPackItems: function( req, res, next ){
        req.app.get( 'db' )
            .get_pack_items([ req.params.trip_id ])
            .then((items) => {
                res.status( 200 ).json( items )
            })
            .catch(( err ) => {
                console.log( err )
                res.status( 500 ).json( 'Failure' )
            })
    },

    //Calendar Endpoints
    getDates: function (req, res, next) {
        req.app.get('db')
        .get_date([req.params.trip_id])
        .then(dates => {
            res.status(200).json(dates[0])
        })
        .catch(err => {
            console.log(err)
            res.status(500).json('Date Retrieval Failure')
        })
    },
    addDates: function (req, res, next) {
        console.log(req.body.fromDate)
        req.app.get('db')
        .add_date([req.body.fromDate, req.body.toDate, req.params.trip_id])
        .then(dates => {
            res.status(200).json(dates[0])
        })
        .catch( err => {
            console.log(err)
            res.status(500).json('Date Add Failure')
        })
    }


}
