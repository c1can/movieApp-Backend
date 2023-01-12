const mongoose = require('mongoose')


const billSchema = new mongoose.Schema({
    fecha_reservacion: String,
    pelicula: String,
    butacas: Array,
    total: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})


const Bill = mongoose.model('Bill', billSchema)


module.exports = Bill