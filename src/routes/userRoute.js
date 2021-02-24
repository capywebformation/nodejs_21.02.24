const userController = require('../controllers/userController');

module.exports = (server) => {
    server.post('/register', userController.userRegister);
    server.post('/login', userController.userLogin);
}