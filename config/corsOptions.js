const allowedOrigins = require('./allowedOrigins');

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200,
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'], // <--- especificar métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], // <--- especificar encabezados permitidos
   // credentials: true, // <--- permitir el envío de cookies en las solicitudes
   //Esta opcion se configura en el middleware credentials.js. Se define como true si el origen del cual recibe la llamada esta en la whitelist
    exposedHeaders: ['*'], 
    // <--- especificar encabezados que se pueden enviar al cliente
    credentials: true,

    
}

module.exports = corsOptions;