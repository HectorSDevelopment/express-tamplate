const express = require('express')
const router = express.Router()

// Actualizar un registro
// PUT http://localhost:3000/api/materias/bachillerato/actualizar
router.put('/', function(req, res, next) {
  req.response(null, 'Se actualizo correctamente...')
})

module.exports = router
