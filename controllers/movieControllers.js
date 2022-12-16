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
        }).catch((error) => {
            next(error)
        })
} 

const editMovie = (req, res, next) => {
    const { id } = req.params
    const { nombre, poster, asientos, horarios, precio } = req.body

    if(nombre || poster || asientos || horarios || precio) {
        const editedNote = {
            nombre: nombre,
            img: poster,
            asientos: asientos,
            horarios: horarios,
            precio: precio
        }
        Movie.findByIdAndUpdate(id, editedNote)
            .then(result => {
                return result
                    ? res.status(200).end()
                    : res.status(404).json({error: 'id no encontrado'})
            }).catch(next)
        return
    }
    return res.status(400).json({ error: 'ingresa al menos un dato!' })

}
module.exports = { getMovie, addMovie, getMovieById, editMovie }