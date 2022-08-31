const mongoose = require('mongoose')


const connectDatabase = () => {
    mongoose.connect('mongodb+srv://admin:admin@work.uul6tua.mongodb.net/?retryWrites=true&w=majority')
    .then(con => {
        console.log(`MongoDB database connected  with  host  ${con.connection.host}` )
    })}

module.exports = connectDatabase