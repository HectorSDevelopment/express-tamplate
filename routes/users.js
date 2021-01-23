const express = require('express')
const router = express.Router()

// GET users listing
router.get('/', function(req, res, next) {
  let response = [
    {
      name: 'benito juarez',
      age: 500
    },
    {
      name: 'Love Craft',
      age: 1000
    }
  ]

  req.response(null, response)
})

module.exports = router
