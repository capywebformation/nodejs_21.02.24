const postController = require('../controllers/postController');

module.exports = (server) => {
    server.route('/posts')
        .get(postController.listAllPosts)
        .post(postController.createAPost);

    // server.route('/posts/:id_post')
    //     .get(postController.getAPost)
    //     .put(postController.updateAPost)
    //     .delete(postController.deleteAPost);
}