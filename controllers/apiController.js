const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const apiUser = require('../models/userApiModel')

const apiRegister = async(req, res) => {
    const { name, email, password } = req.body

    if(JSON.stringify(req.body) == '{}') return res.status(400).json({error: 'ingresa tus datos!'})

    if(!(name && password && email)) return  res.status(400).json({ error: 'ingresa todos los datos' })
    
    const registered = await apiUser.findOne({email: email})
    if(registered) return res.status(400).json({ error: 'nombre de usuario ya registrado!' })

    try {
        const encryptedPassword = await bcrypt.hash(password, 10)
        const token = await jwt.sign({email: email}, process.env.JWT_KEY)
        const newApiUser = new apiUser({
            name: name,
            email: email,
            password: encryptedPassword,
            token: token,
            rol: 'user'
        })

        await newApiUser.save()
        return res.status(200).json({ message: 'usuario creado' })
    } catch (error) {
        return res.status(400).end()
    }
}

const apiLogin = async (req, res, next) => {
    if(JSON.stringify(req.body) == '{}')  return res.status(400).json({ error: 'ingresa tus datos!' })
   
    const { email, password } = req.body

    if(!(password && email)) return res.status(400).json({ error: 'ingresa todos los datos!' })
    
    const matchUser = await apiUser.findOne({email: email}).select('password token')
    if(!matchUser) return res.status(400).json({ error: 'usuario no registrado' })
    
    
    try {
        const checkPassword = await bcrypt.compare(password, matchUser.password)


        if(checkPassword) return res.status(200).json(matchUser.token)

        return res.status(400).json({ error: 'contraseña invalida' })

    } catch (error) {
        next(error)
    }
}

module.exports = { apiRegister, apiLogin }