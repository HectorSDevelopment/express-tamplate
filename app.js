/**
 * * Main app
 * *
 * 
 */

const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const fs = require('fs')

const middlewares = require('./middlewares')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// Iniciar middlewares
middlewares(app)

// Para cargar rutas de forma automatica
const setRoutes = src => {
    for (let r of fs.readdirSync(src)) {
        let uri = src + '/' + r

        if (fs.lstatSync(uri).isDirectory()) {
            setRoutes(uri)
        } else {
            uri = uri.replace('.js', '')

            let route = uri.replace('./routes', '')

            if (r === 'index.js') {
                route = route.replace('index', '')
            }

            app.use(route, require(uri))
        }
    }
}

// Iniciar rutas
setRoutes('./routes')

module.exports = app
