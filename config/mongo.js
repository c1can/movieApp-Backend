const mongoose = require('mongoose')

const dbConnection = () => {
    mongoose.set('strictQuery', true)
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log('Conectado!')
        })
        .catch(() => console.log('Error'))
}


module.exports = dbConnection