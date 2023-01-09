const mongoose = require('mongoose')


const reservationSchema = new mongoose.Schema({
    creacion: Date,
    butacas: Array,
    total: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})


const Reservation = mongoose.model('Reservation', reservationSchema)


module.exports = Reservation