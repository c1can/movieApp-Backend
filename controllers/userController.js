const User = require('../models/UserModel')
const bcrypt = require('bcrypt')


const registerUser = async(req, res, next) => {
 
    const {nombre, apellido, contraseña, correo, telefono} = req.body

    if(JSON.stringify(req.body) == '{}') return res.status(400).json({ error: 'Ingresa tus datos!' })

    if(!(nombre && correo && contraseña && telefono)) return res.status(400).json({ error: 'Ingresa los datos necesarios!' })

    try {
        const encryptedPassword = await bcrypt.hash(contraseña, 10)
        const newUser = new User({
            nombre: nombre,
            apellido: apellido,
            contraseña: encryptedPassword,
            correo: correo,
            telefono: telefono,
            rol: 'usuario',
            creditos: 300
        })
        await newUser.save()
        return res.status(201).json({response: 'usuario registrado!'})
    } catch (error) {
        next(error)
    }
}


module.exports = { registerUser }