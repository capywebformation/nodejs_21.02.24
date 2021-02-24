const postController = require('../controllers/postController');
const jwtMiddleware = require('../middleware/jwtMiddleware');

module.exports = (server) => {
    server.route('/posts')
        .get(postController.listAllPosts)
        .post(postController.createAPost);

    server.route('/posts/:id_post')
        .get(postController.getAPost)
        .put(postController.updateAPost)
        .delete(jwtMiddleware.verifyToken, postController.deleteAPost);
}