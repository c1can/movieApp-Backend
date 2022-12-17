const { getMovie, addMovie, getMovieById, editMovie, deleteMovie } = require('../controllers/movieControllers')
const { registerUser, loginUser } = require('../controllers/userController')
const { handleError, pageNotFound } = require('../middlewares/errorMiddlewares')


const routes = (app) => {

    app.get('/', (req, res) => res.send('<h1>Bienvenido</h1>'))
    app.post('/api/register', registerUser)
    app.post('/api/login', loginUser)
    app.get('/api/cartelera', getMovie)
    app.get('/api/cartelera/:id', getMovieById)
    app.post('/api/cartelera', addMovie)
    app.put('/api/cartelera/:id', editMovie)
    app.delete('/api/cartelera/:id', deleteMovie)
    app.use(pageNotFound)
    app.use(handleError)
}

module.exports = routes