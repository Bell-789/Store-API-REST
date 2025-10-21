import cors from 'cors';


//Obtener las url's permitidas desde el archivo env
const allowedOrigins = process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : [];

//Configurar nuestro middleware de manejo de CORS
const corsOptions = {
    origin: (origin, callback) => {
        if(!origin || allowedOrigins.includes(origin) ){
            callback(null, true);
        } else {
            callback(new Error("Cors no incluido"));
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
};

export default cors(corsOptions);
