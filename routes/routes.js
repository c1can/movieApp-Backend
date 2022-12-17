const { getMovie, addMovie, getMovieById, editMovie, deleteMovie } = require('../controllers/movieControllers')
const { registerUser, loginUser } = require('../controllers/authController')
const { getClientes, editClientes, deleteCliente } = require('../controllers/clientesController')
const { handleError, pageNotFound } = require('../middlewares/errorMiddlewares')


const routes = (app) => {

    //-------Home----------------
    app.get('/', (req, res) => res.send('<h1>Bienvenido</h1>'))
    //------Login----------
    app.post('/api/register', registerUser)
    app.post('/api/login', loginUser)
    //------Clientes-------------
    app.get('/api/clientes', getClientes)
    app.put('/api/clientes/:id', editClientes)
    app.delete('/api/clientes/:id', deleteCliente)
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