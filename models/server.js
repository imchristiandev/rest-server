const express = require('express');
const cors = require('cors');

class Server {
    
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users'

        // Middleware: Es una función que va a ejecutarse cuando se levanta un servidor.
        this.middlewares();
        // Rutas de mi aplicación
        this.routes();
    }

    middlewares() {
        //CORS
        this.app.use( cors() );
        // Lectura y parse de body
        this.app.use( express.json() );
        // Directorio púbilco
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use(this.usersPath, require('../routes/users'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server running in port', this.port);
        });
    }
}

module.exports = Server;