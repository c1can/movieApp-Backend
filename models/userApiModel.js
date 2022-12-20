const mongoose = require('mongoose')


const apiUserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    rol: String,
    token: String
})

const apiUser = mongoose.model('apiUser', apiUserSchema)

module.exports = apiUser