const { movieAddition, ReservarButaca } = require('../helpers/movieAddition')
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

const reserveMovie = (req, res, next) => {
    const { id } = req.params
    const body = req.body

    Movie.findById(id)
        .then(response => {
            const { horarios } = response
            const a = horarios.map(horario => {
                const { asientos } = horario
                return asientos
            })
            const dbAsientos = a[0].map(x => x)


            const reemplazados = dbAsientos.map(dbAsiento => {
                const match = body.find(reemplazo => reemplazo.nm == dbAsiento.nm)

                return match ? match : dbAsiento
            })     

            const butacasReservadas = ReservarButaca(reemplazados)

            return Movie.findByIdAndUpdate(id, butacasReservadas)
            
        }).then(() => {
            return res.status(200).json({success: 'Asientos Reservados!'})
        }).catch(next)

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
module.exports = { getMovie, addMovie, getMovieById, reserveMovie, deleteMovie }