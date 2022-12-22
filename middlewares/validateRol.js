const User = require('../models/UserModel')


const validateRol = async(req, res, next) => {
    const token = req.headers['x-access-token']

    const matchUser = await User.findOne({token: token}).select('token rol nombre')
    if(!matchUser) return res.status(400).json({error: 'ese token no existe'})
    if(matchUser.rol !== 'admin') return res.status(401).json({ error: `hola ${matchUser.nombre}! aun no eres administrador por favor espera` })

    return next()
}

module.exports = validateRol