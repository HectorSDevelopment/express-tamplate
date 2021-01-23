/**
 * * Responder peticiones
 * *
 *   Normalizar la respuesta de peticiones
 *   de todas las solicitudes
 * 
 */

// Almacenar lista de errores
const errorlist = require('../config/error.json')

const getError = code => {
    let message = errorlist[code] || ''

    return { message: message, code: code }
}

module.exports = (req, res, next) => {
    /**
     * 
     * @param {string} err - Mensaje de error
     * @param {any} result - Payload / Status code
     */

    req.response = (err, result) => {        
        // Establecer el estatus si esta definido
        // El estatus tambien se puede definir antes de llamar
        // este middleware
        if (err && !result && Number.isInteger(result)) {
            res.status(result)
        }

        if (err) {
            res.json({
                success: false,
                error: getError(err)
            })
        } else {
            res.json({
                success: true,
                payload: result
            })
        }
    }

    next()
}
