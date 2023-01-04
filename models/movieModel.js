const mongoose = require('mongoose')


const movieSchema = new mongoose.Schema({
    nombre: String,
    img: String,
    horarios: Array,
    precio: Number,
})

const Movie = mongoose.model('Movie', movieSchema)


module.exports = { Movie }