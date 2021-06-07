/* VERIFICATION DU TOKEN */

const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, 'IhY&l2oDhjt9eni9SSJ9MIQ4&rySxBgEf&wPHgLn');
        const userId = decodedToken.userId;
        if (req.body.userId && req.body.userId !== userId ) {
            throw 'Invalid user ID';
        } else {
            next()
        }
    } catch (error) {
        res.status(401).json({error : error | 'Unauthenticated request'});
    }
};