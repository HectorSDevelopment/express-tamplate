const express = require('express')
const router = express.Router()

// Listar materias de secundaria
// GET http://localhost:3000/api/materias/secundaria
router.get('/', function(req, res, next) {
    req.response(null, 'Listado con las materias de secundaria...')
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

// POST http://localhost:3000/api/materias/secundaria/insertar
router.post('/insertar', function(req, res, next) {
    req.response(null, 'Se inserto correctamente...')
})

// DELETE http://localhost:3000/api/materias/secundaria/eliminar
router.delete('/eliminar', function(req, res, next) {
    req.response(null, 'Se elimino correctamente...')
})
  
module.exports = router
