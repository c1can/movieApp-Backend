const { getMovie, addMovie, getMovieById, editMovie, deleteMovie } = require('../controllers/movieControllers')
const { registerUser, loginUser } = require('../controllers/authController')
const { handleError, pageNotFound } = require('../middlewares/errorMiddlewares')


const routes = (app) => {

    //-------Home----------------
    app.get('/', (req, res) => res.send('<h1>Bienvenido</h1>'))
    //------Login----------
    app.post('/api/register', registerUser)
    app.post('/api/login', loginUser)
    //------Usuarios-------------
    //-------Cartelera-----------
    app.get('/api/cartelera', getMovie)
    app.get('/api/cartelera/:id', getMovieById)
    app.post('/api/cartelera', addMovie)
    app.put('/api/cartelera/:id', editMovie)
    app.delete('/api/cartelera/:id', deleteMovie)
    //------HandleError----------
    app.use(pageNotFound)
    app.use(handleError)
}

module.exports = routes