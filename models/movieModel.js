const mongoose = require('mongoose')


const movieSchema = new mongoose.Schema({
    nombre: String,
    img: String,
    asientos: Number,
    precio: Number,
    horarios: Array
})

const Movie = mongoose.model('Movie', movieSchema)


module.exports = { Movie }