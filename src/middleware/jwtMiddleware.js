const jwt = require('jsonwebtoken');

const jwtKey = process.env.JWT_KEY;

exports.verifyToken = (req, res, next) => {
    let token = req.headers['authorization'];

    if (typeof token !== undefined) {
        jwt.verify(token, jwtKey, (error) => {
            if (error) {
                res.json({
                    message: "Accès interdit !"
                });
            } else {
                next();
            }
        })
    } else {
        res.status(403);
        res.json({
            message: "Accès interdit !"
        });
    }
}