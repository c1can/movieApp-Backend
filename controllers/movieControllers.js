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

module.exports = { getMovie }