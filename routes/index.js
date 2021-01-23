var express = require('express')
var router = express.Router()

router.get('/ejemplo', function(req, res, next) {
  // Responder utilizando el middleware
  req.response(null, 'Works...')
})

// Probar mensaje de error
router.get('/makeerror', function(req, res, next) {
  // Responder utilizando el middleware
  req.response('ERR_CODE1')
})

// Probar mensaje de error con status
router.get('/makeerror500', function(req, res, next) {
  // Responder utilizando el middleware
  req.response('ERR_CODE2', 500)
})

module.exports = router
