const { getMovie, addMovie, getMovieById } = require('../controllers/movieControllers')


const routes = (app) => {

    app.get('/', (req, res) => res.send('<h1>Bienvenido</h1>'))
    app.get('/api/cartelera', getMovie)
    app.get('/api/cartelera/:id', getMovieById)
    app.post('/api/cartelera', addMovie)
}

module.exports = routes