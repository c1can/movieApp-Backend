const mongoose = require('mongoose')


const billSchema = new mongoose.Schema({
    creacion: Date,
    butacas: Array,
    total: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})


const Bill = mongoose.model('Bill', billSchema)


module.exports = Bill