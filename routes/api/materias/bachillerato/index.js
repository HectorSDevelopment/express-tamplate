const express = require('express')
const router = express.Router()

// Listar materias de bachillerato
// GET http://localhost:3000/api/materias/bachillerato
router.get('/', function(req, res, next) {
  req.response(null, 'Listado con las materias de bachillerato...')
})

// Nota... se podria hacer todo el crud sobre
// este mismo archivo index como se muestra a continuación...
// Pero en proyectos mas grandes quiza conviene separarlo es distintos archivos
// como es el caso de actualizar

/* Ver archivo actualizar
router.put('/actualizar', function(req, res, next) {
  req.response(null, 'Se actualizo correctamente...')
})
*/

// POST http://localhost:3000/api/materias/bachillerato/insertar
router.post('/insertar', function(req, res, next) {
  req.response(null, 'Se inserto correctamente...')
})

// DELETE http://localhost:3000/api/materias/bachillerato/eliminar
router.delete('/eliminar', function(req, res, next) {
  req.response(null, 'Se elimino correctamente...')
})

module.exports = router
