const apiUser = require('../models/userApiModel')


const validateRol = async(req, res, next) => {
    const token = req.headers['x-access-token']

    const userApi = await apiUser.findOne({token: token}).select('token rol email')
    if(userApi.rol !== 'admin') return res.status(401).json({ error: 'Espera a que te den un rol de administrador' })

    return next()
}

module.exports = validateRol