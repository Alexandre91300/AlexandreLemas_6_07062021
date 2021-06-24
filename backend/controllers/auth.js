/* LOGIQUE DES REQUETES D'AUTHENTIFICATION */

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();
const passwordValidator = require('password-validator');
const CryptoJS = require("crypto-js");

// Password Validator
var schema = new passwordValidator();

schema
.is().min(6)                                    // Minimum length 6
.is().max(100)                                  // Maximum length 100
.has().uppercase()                              // Must have uppercase letters
.has().lowercase()                              // Must have lowercase letters
.has().digits(2)                                // Must have at least 2 digits
.has().not().spaces()                           // Should not have spaces
.is().not().oneOf(['Passw0rd', 'Password123']); // Blacklist these values

// Crypto JS
const key = `${process.env.KEY}`;
const keyutf = CryptoJS.enc.Utf8.parse(key);
const iv = CryptoJS.enc.Base64.parse(key);

const encrypt = (string) => {
    const enc = CryptoJS.AES.encrypt(string, keyutf, { iv: iv });
    return enc.toString();
}

// POST
/******/

exports.signUp = (req,res,next) => {
    if (schema.validate(req.body.password)) {
        bcrypt.hash(req.body.password, 10)
            .then(hash => {
                const user = new User({
                    email: encrypt(req.body.email),
                    password: hash
                })
                user.save()
                    .then(() => res.status(201).json({message: "The user has been successfully created"}))
                    .catch(error => res.status(400).json({error}))
            })
            .catch(error => res.status(500).json({error}))
    } else {
        res.status(400).json({message: "Invalid password: Min length = 6 / Max length = 100 / Uppercase letters / Lowercase letters / have at least 2 digits"})
    }
};

exports.login = (req,res,next) => {
    User.findOne({email: encrypt(req.body.email)})
        .then(user => {
            if(!user){
                return res.status(401).json({error: "User not found"})
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if(!valid){
                        return res.status(401).json({error: "Incorrect password"})
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign({ userId: user._id },
                            `${process.env.TOKEN}`,
                        {expiresIn: '24h'}
                        )
                    });
                })
                .catch(error => res.status(500).json({error}));
        })
        .catch(error => res.status(500).json({error}));
};
