import VentaDAO from '../dao/ventaDAO.js';
import { AppError } from '../utils/appError.js';

class VentaController {
    static async crearVenta(req, res, next) {
        try {
            const { idUsuario, fecha, total, productosventa } = req.body;

            if (!idUsuario || !fecha || !total) {
                return next(new AppError('Los campos idUsuario, fecha y total son requeridos', 400));
            }

            const ventaData = { idUsuario, fecha, total, productosventa: productosventa || [] };
            const venta = await VentaDAO.crearVenta(ventaData);
            res.status(201).json(venta);

        } catch (error) {
            console.error(error);
            next(new AppError('Error al crear la venta', 500));
        }
    }

    static async agregarProductosAVenta(req, res, next) {
        try {
            const { idVenta } = req.params;
            const { productos } = req.body;

            if (!productos || !Array.isArray(productos) || productos.length === 0) {
                return next(new AppError('Se requiere una lista de productos válida', 400));
            }

            const ventaActualizada = await VentaDAO.agregaProductosAVenta(idVenta, productos);
            res.status(200).json(ventaActualizada);

        } catch (error) {
            console.error(error);
            if (error.message === 'No se encontro la venta') {
                return next(new AppError('Venta no encontrada', 404));
            }
            next(new AppError('Error al agregar productos a la venta', 500));
        }
    }
}

export default VentaController;
