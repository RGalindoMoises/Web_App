const Empleado = require('../model/Empleado')

//mostrar
module.exports.mostrar = (req, res) => {

    Empleado.find({}, (error, empleados) => {
        if (error) {
            return res.status(500).json({
                message: 'Error al mostrar'
            })
        }
        console.log(empleados)
    })
}