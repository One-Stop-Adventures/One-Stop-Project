module.exports = {

//Meals endpoints
    createMeal: function (req, res, next) {
        console.log(req.params);
        
        req.app.get('db')
        .create_meal([req.params.id, req.body.item, req.body.meal_time, req.body.meal_day])
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
        .read_meal([req.params.id])
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
        .read_meals()
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
        .delete_meal([req.params.id])
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
            .add_to_do([ req.params.id, req.body.item ])
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
            .delete_to_do([ req.params.id, req.body.id ])
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
            .get_to_do([ req.params.id ])
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
            .add_pack_item([ req.params.id, req.body.item ])
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
            .get_pack_items([ req.params.id ])
            .then(() => {
                res.status( 200 ).json( 'Success' )
            })
            .catch(( err ) => {
                console.log( err )
                res.status( 500 ).json( 'Failure' )
            })
    }


}