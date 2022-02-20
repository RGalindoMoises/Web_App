const mongoose = require('mongoose')
const url = 'mongodb://localhost/db_empleados'

mongoose.connect(url, {

    useNewUrlParser: true,

    useUnifiedTopology: true


})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Error al conectar a DB'))
db.once('open', function callback() {

    console.log('Conexion exitosa')

})

module.exports = db