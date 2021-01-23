/**
 * * Middlewares
 * *
 *   !El orden es importatne
 * 
 */

module.exports = app => {
    // Middleware global
    // Normalizar respuestas para peticiones
    app.use('/', require('./response'))

    // Cargar otros middlewares
    // ...
}
