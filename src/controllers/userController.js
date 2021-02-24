const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

exports.userRegister = (req, res) => {
    let newUser = new User(req.body);

    newUser.save((error, user) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            });
        } else {
            res.status(200);
            res.json(user);
        }
    })
}

exports.userLogin = (req, res) => {
    User.findOne({
        email: req.body.email
    }, (error, user) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            });
        } else {
            if (user.email === req.body.email && user.password === req.body.password) {
                jwt.sign({
                    user
                }, process.env.JWT_KEY, {
                    expiresIn: '30 days'
                }, (error, token) => {
                    if (error) {
                        res.status(500);
                        console.log(error);
                        res.json({
                            message: "Erreur serveur."
                        });
                    } else {
                        res.json({token})
                    }
                })

            } else {
                res.status(403);
                console.log(error);
                res.json({
                    message: "Authentification incorrect."
                });
            }
        }
    })
}