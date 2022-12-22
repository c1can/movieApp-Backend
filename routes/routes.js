const { getMovie, addMovie, getMovieById, editMovie, deleteMovie } = require('../controllers/movieControllers')
const { registerUser, loginUser } = require('../controllers/authController')
const { getClientes, editClientes, deleteCliente } = require('../controllers/clientesController')
const validateRol = require('../middlewares/validateRol')
const { handleError, pageNotFound } = require('../middlewares/errorMiddlewares')
const auth = require('../middlewares/authApi')


const routes = (app) => {

    //-------Home----------------
    app.get('/', (req, res) => res.send('<h1>Bienvenido</h1>'))
    //------Auth----------
    app.post('/api/register', registerUser)
    app.post('/api/login', loginUser)
    //------Clientes-------------
    app.get('/api/clientes', auth, validateRol, getClientes)
    app.put('/api/clientes/:id',auth, validateRol, editClientes)
    app.delete('/api/clientes/:id', auth, validateRol, deleteCliente)
    //-------Cartelera-----------
    app.get('/api/cartelera', getMovie)
    app.get('/api/cartelera/:id', getMovieById)
    app.post('/api/cartelera', auth, validateRol, addMovie)
    app.put('/api/cartelera/:id', auth, validateRol, editMovie)
    app.delete('/api/cartelera/:id', auth, validateRol, deleteMovie)
    //------HandleError----------
    app.use(pageNotFound)
    app.use(handleError)
}

module.exports = routes