const postController = require('../controllers/commentController');

module.exports = (server) => {
    server.route('/posts/:id_post/comments')
        .get(postController.listAllComments)
        .post(postController.createAComment);

    server.route('/comments/:id_comment')
        .get(postController.getAComment)
        .put(postController.updateAComment)
        .delete(postController.deleteAComment);
}