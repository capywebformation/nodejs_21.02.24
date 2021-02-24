const commentController = require('../controllers/commentController');

module.exports = (server) => {
    server.route('/posts/:id_post/comments')
        .get(commentController.listAllComments)
        .post(commentController.createAComment);

    server.route('/comments/:id_comment')
        .get(commentController.getAComment)
        .put(commentController.updateAComment)
        .delete(commentController.deleteAComment);
}