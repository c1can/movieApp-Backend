const { Movie } = require('../models/movieModel')


const getMovie = (req, res) => {
    Movie.find({})
        .then(result => {
            if(result) return res.status(200).json(result)

            return res.status(400).end()
        }).catch((error) => {
            console.log(error)
        })
}

const addMovie = (req, res) => {
    if(JSON.stringify(req.body) == '{}') return res.status(406).end()

    const { nombre, poster, precio, asientos, horarios } = req.body

    if(!(nombre && poster && precio && asientos && horarios)) {
        return res.status(406).json({ error: 'Todos los campos son necesarios' })
    }
    
    const newMovie = new Movie({
        nombre: nombre,
        img: poster,
        asientos: asientos,
        precio: precio,
        horarios: horarios
    })
    newMovie.save()
        .then(result => {
            if(result) return res.status(201).end()
            
            return res.status(404).end()
        })
}

const getMovieById = (req, res, next) => {
    const { id } = req.params

    Movie.findById(id)
        .then(result => {
            return result 
                ? res.status(200).json(result)
                : res.status(404).json({error: 'id no encontrado'})
        }).catch(error => console.log(error.name))
} 
module.exports = { getMovie, addMovie, getMovieById }