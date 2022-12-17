const User = require('../models/UserModel')

const getClientes = (req, res) => {
    User.find({})
        .then(result => {
            return !result 
                ? res.status(400).end() 
                : res.status(200).json(result)
        }).catch(() => res.status(400).end()) 
}


module.exports = { getClientes }