module.exports = {

    getBlog: function( req, res, next ){
        req.app.get( 'db' )
            .get_blog([ ])
            .then(( blogs ) => {
                res.status( 200 ).json( blogs )
            })
            .catch(( err ) => {
                console.log( err )
                res.status( 500 ).json( 'failed' )
            })
    },
    postBlog: function( req, res, next ){
        req.app.get( 'db' )
            .post_blog([ req.body.post, req.body.title, req.body.date, req.body.image ])
            .then(( post ) => {
                res.status( 200 ).json( post )
            })
            .catch(( err ) => {
                console.log( err )
                res.status(500).json( 'failed' )
            })
    },
    deleteBlog: function( req, res, next ){
        req.app.get( 'db' )
            .delete_blog([ req.params.id ])
            .then(() => {
                res.status( 200 ).json( 'success' )
            })
            .catch(( err ) => {
                console.log( err )
                res.status(500).json( 'failed' )
            })
    },
    editBlog: function( req, res, next ){
        req.app.get( 'db' )
            .edit_blog([ req.params.id, req.body.post, req.body.title, req.body.image ])
            .then(( blog ) => {
                res.status( 200 ).json( blog )
            })
            .catch(( err ) => {
                console.log( err )
                res.status(500).json( 'failed' )
            })
    }

}