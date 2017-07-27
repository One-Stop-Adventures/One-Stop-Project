module.exports = {

    addToDo: function( req, res, next ){
        req.app.get( 'db' )
            .add_to_do([ req.params.id, req.body.item ])
            .then(( todo ) =>{
                console.log(todo)
                res.status(200).json(todo)
            })
            .catch(( err ) =>{
                console.log(err)
                res.status(500).json(err)
            })
    },

    deleteToDo: function ( req, res, next){
        console.log(req.params)
        req.app.get('db')
            //Currently, id is set to be hard coded. To-do id needs to be passed on to the list.
            .delete_to_do([ req.params.id, req.body.id ])
            .then(() => {
                res.status(200).json('success')
            })
            .catch(( err ) => {
                console.log(err)
                res.status(500).json('failed to delete')
            })
    }

}