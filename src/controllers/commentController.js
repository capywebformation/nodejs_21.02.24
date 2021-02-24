const Comment = require('../models/commentModel');

exports.listAllComments = (req, res) => {
    Comment.find({id_post : req.params.id_post}, (error, comments) => {
        if(error) {
            res.status(500);
            console.log(error);
            res.json({message: "Erreur serveur."});
        }
        else {
            res.status(200);
            res.json(comments);
        }
    });
}

exports.createAComment = (req, res) => {
    let newComment = new Comment(req.body);
    newComment.id_post = req.params.id_post;

    newComment.save((error, comment) => {
        if(error) {
            res.status(500);
            console.log(error);
            res.json({message: "Erreur serveur."});
        }
        else {
            res.status(201);
            res.json(comment)
        }
    });
}

exports.getAComment = (req, res) => {
    Comment.findById(req.params.id_comment, (error, comment) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            });
        } else {
            res.status(200);
            res.json(comment);
        }
    })
}

exports.updateAComment = (req, res) => {
    Comment.findByIdAndUpdate(req.params.id_comment, req.body, { new: true }, (error, comment) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            });
        } else {
            res.status(200);
            res.json(comment);
        }
    })
}

exports.deleteAComment = (req, res) => {
    Comment.findByIdAndDelete(req.params.id_comment, (error) => {
        if (error) {
            res.status(500);
            console.log(error);
            res.json({
                message: "Erreur serveur."
            });
        } else {
            res.status(200);
            res.json({
                message: "Commentaires supprimé"
            });
        }
    })
}