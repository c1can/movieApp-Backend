const pageNotFound = (req, res) => {
    res.status(404).send('<p>Page not Found</p>')
}

const handleError = (error, req, res, next) => {
    if(error.name === 'CastError') return res.status(400).json({error: 'id mal formado'})
    return res.status(500).end()
}

module.exports = {handleError, pageNotFound}