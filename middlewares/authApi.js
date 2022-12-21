const jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
    const token = req.headers['x-access-token']
    if(!token) return res.status(401).json({ error: 'ingresa tu token' })

    try {
        const decode = jwt.verify(token, process.env.JWT_KEY)
        if(decode) return next()
    } catch (error) {
        return res.status(406).json({ error: 'token invalido' })
    }
}

module.exports = auth