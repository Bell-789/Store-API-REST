import express from 'express';
import productoController from '../controllers/productoController.js';

const router = express.Router();

router.get('/' , productoController.obtenerProductos);
router.get('/:id', productoController.obtenerProductoPorId);
router.post('/', productoController.crearProducto);
router.put('/:id', productoController.actualizarProductoPorId);
router.delete('/:id', productoController.eliminarProductoPorId);

export default router;