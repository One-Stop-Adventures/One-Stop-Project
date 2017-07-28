const blogCtrl = require('./blogCtrl');

module.exports = app => {
    app.get('/api/blog', blogCtrl.getBlog)
    app.post('/api/blog', blogCtrl.postBlog)
    app.post('/api/blog/:id', blogCtrl.editBlog)
    app.delete('/api/blog/:id', blogCtrl.deleteBlog)
}