const { getMovie, addMovie, getMovieById, editMovie } = require('../controllers/movieControllers')
const { handleError, pageNotFound } = require('../middlewares/errorMiddlewares')


const routes = (app) => {

    app.get('/', (req, res) => res.send('<h1>Bienvenido</h1>'))
    app.get('/api/cartelera', getMovie)
    app.get('/api/cartelera/:id', getMovieById)
    app.post('/api/cartelera', addMovie)
    app.put('/api/cartelera/:id', editMovie)
    app.use(pageNotFound)
    app.use(handleError)
}

module.exports = routes