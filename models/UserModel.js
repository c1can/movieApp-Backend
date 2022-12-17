const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    correo: String,
    contraseña: String,
    telefono: Number,
    rol: String,
    creditos: Number
})

const User = mongoose.model('User', userSchema)

module.exports = User