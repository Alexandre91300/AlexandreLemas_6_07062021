/* LOGIQUE DES REQUETES [C.R.U.D] SAUCE */

const Sauce = require('../models/Sauce');
const fs = require('fs');

// POST
/******/

exports.createSauce = (req,res,next) => {
    const sauceObject = JSON.parse(req.body.sauce);
    delete sauceObject._id;
    const sauce = new Sauce({
        ...sauceObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        likes : 0,
        dislikes : 0,
        usersLiked : [],
        usersDisliked : []
    })
    sauce.save()
    .then(() => res.status(201).json({
        message: 'Sauce created'
    }))
    .catch(() => res.status(400).json({
        error
    }))
};

exports.likeSauce = (req, res, next) => {
    Sauce.findOne({_id: req.params.id })
        .then(sauce => {
            let likes = sauce.likes;
            let dislikes = sauce.dislikes;
            let usersLiked = sauce.usersLiked;
            let usersDisliked = sauce.usersDisliked;

            switch (req.body.like) {
                case 1:
                    usersLiked.push(req.body.userId);
                    likes += 1;
                    Sauce.updateOne({_id: req.params.id }, {likes: likes, usersLiked: usersLiked})
                        .then(() => res.status(200).json({message: "Like"}))
                        .catch(error => res.status(400).json({error}));
                    break;
            
                case 0:
                    for(let i = 0; usersLiked.length; i++){
                        if(usersLiked[i] === req.body.userId){
                            usersLiked.splice(i, 1)
                            likes -= 1
                        }
                    }
                    for(let i = 0; usersDisliked.length; i++){
                        if(usersDisliked[i] === req.body.userId){
                            usersDisliked.splice(i, 1)
                            dislikes -= 1
                        }
                    }
                    Sauce.updateOne({_id: req.params.id }, { likes: likes, dislikes: dislikes, usersLiked: usersLiked, usersDisliked: usersDisliked})
                        .then(() => res.status(200).json({message: "Cancel the like"}))
                        .catch(error => res.status(400).json({error}));
                    break;
                default:
                    usersDisliked.push(req.body.userId);
                    dislikes += 1;
                    Sauce.updateOne({_id: req.params.id }, {dislikes: dislikes, usersDisliked: usersDisliked})
                        .then(() => res.status(200).json({message: "Dislike"}))
                        .catch(error => res.status(400).json({error}));
                    break;
            }
        })
        .catch(error => res.status(400).json({error}))
}

// GET 
/*****/

exports.getAllSauce = (req,res,next) => {
    Sauce.find()
        .then(sauces => res.status(200).json(sauces))
        .catch(error => res.status(400).json({error}))
}

exports.getOneSauce = (req, res, next) => {
    Sauce.findOne({_id: req.params.id })
        .then(sauce => res.status(200).json(sauce))
        .catch(error => res.status(400).json({error}))
}

// DELETE
/********/

exports.deleteSauce = (req, res, next) => {
    Sauce.findOne({_id: req.params.id})
    .then(sauce => {
        const filename = sauce.imageUrl.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {
            Sauce.deleteOne({_id: req.params.id })
            .then(() => res.status(200).json({message: "Object delete"}))
            .catch(error => res.status(400).json({error}))
        })
    })
    .catch(error => res.status(500).json({error}))
}

// PUT
/*****/

exports.modifySauce = (req,res,next) => {
    const sauceObject = req.file ?
    { 
        ...JSON.parse(req.body.sauce),
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };

    Sauce.updateOne({_id: req.params.id},{...sauceObject})
    .then(() => res.status(200).json({message: "Object modify"}))
    .catch(error => res.status(400).json({error}));
}