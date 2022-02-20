const mongoose = require('mongoose')
const Schema = mongoose.Schema

const empleadoSchema = new Schema({

    name: String,
    user: String,
    password: String

}, { versionKey: false })

module.exports = mongoose.model('empleados', empleadoSchema)