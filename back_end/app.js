const express = require('express')
const app = express()

require('./db')

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(express.static('public'))

const empleados = require('./routes/empleados')
app.use(empleados)

app.get('/', (req, res) => {
    res.send('Server UP');
})
app.listen(3000, () => {
    console.log('Server UP');
})