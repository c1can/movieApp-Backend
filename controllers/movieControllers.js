const { movieAddition } = require('../helpers/movieAddition')
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
    if(JSON.stringify(req.body) == '{}') return res.status(406).json({ error: 'ingresa los datos' })

    const { nombre, poster, precio } = req.body

    if(!(nombre && poster && precio)) {
        return res.status(406).json({ error: 'Todos los campos son necesarios' })
    }

    const newMovie = movieAddition(nombre, poster, precio)

    newMovie.save()
        .then(result => {
            if(result) return res.status(201).json({ success: 'pelicula agregada correctamente' })
            
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


//TODO: CHANGE NAME TO BE MORE SPECIFIC,
//CAUSE IM USING THIS CONTROLLER FOR 
//BUYING TICKETS NOT FOR EDITING MOVIES
const editMovie = (req, res, next) => {
    const { id } = req.params
    const { nombre, poster, horarios, precio } = req.body

    if(nombre || poster || horarios || precio) {
        const editedNote = {
            nombre: nombre,
            img: poster,
            horarios: horarios,
            precio: precio
        }
        Movie.findByIdAndUpdate(id, editedNote)
            .then(result => {
                return result
                    ? res.status(200).json({ succes: 'asiento reservado!' })
                    : res.status(404).json({error: 'id no encontrado'})
            }).catch(next)
        return
    }
    return res.status(400).json({ error: 'ingresa al menos un dato!' })

}

const deleteMovie = (req, res, next) => {
    const { id } = req.params
 
    Movie.findByIdAndDelete(id)
        .then(result => {
            return result
                ? res.status(301).end()
                : res.status(404).json({error: 'id no encontrado'})
        }).catch(next)
}
module.exports = { getMovie, addMovie, getMovieById, editMovie, deleteMovie }