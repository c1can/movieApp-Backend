const { getMovie } = require('../controllers/movieControllers')


const routes = (app) => {

    app.get('/', (req, res) => res.send('<h1>Bienvenido</h1>'))
    app.get('/api/peliculas', getMovie)
}

module.exports = routes