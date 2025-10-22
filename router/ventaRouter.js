import express from 'express';
import ventaController from '../controllers/ventaController.js';

const router = express.Router();

router.get('/' , ventaController.obtenerVentas);
router.post('/', ventaController.agregarProductosAVenta);


export default router;