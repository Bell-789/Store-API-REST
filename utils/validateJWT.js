import jwt from 'jsonwebtoken';
import { AppError } from './appError.js';

const validateJWT = (req, res, next) => {
    //obeter el token desde la peticion (Se encia en los headers)

    const token = req.headers('authorization');
    

    if(!token){
        next (new Error('No se proporciono un token', 500));
    }

    //Try-catch para verificar la firma del token
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;


    } catch(error){
        next (new AppError('El token no es valido', 500));
    }

}


export default validateJWT;