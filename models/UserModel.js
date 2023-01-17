const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    correo: String,
    contraseña: String,
    telefono: Number,
    rol: String,
    token: String,
    creditos: Number,
    reservaciones: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Bill'
        
    }]
})

const User = mongoose.model('User', userSchema)

module.exports = User