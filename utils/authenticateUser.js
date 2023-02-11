const env = require("dotenv");
const jwt = require('jsonwebtoken')

env.config()

const tokenSecret = process.env.JWT_KEY;

const authenticateToken = (req, res, next) =>
{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(token == null) return res.sendStatus(401)

    jwt.verify(token, tokenSecret, (err, user) =>
    {
        console.error(err)

        if(err) return res.sendStatus(403).json({message: "Unathorized user"})

        req.user = user
        next()
    })
}

const generateAccessToken = email =>
{
    return jwt.sign(
        {data: email,},
        tokenSecret,
        {expiresIn: '1h'}
    );
}

module.exports = {
    authenticateToken,
    generateAccessToken
}