import { Router } from "express";
import productRoutes from '../modules/product/product.routes.js';

const router = Router();

router.use('/admin', productRoutes);

export default router;