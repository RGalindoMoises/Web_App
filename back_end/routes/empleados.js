const express = require('express')
const router = express.Router()

const empleadoControler = require('../controllers/empleadoControler')

router.get('/', empleadoControler.mostrar)

module.exports = router