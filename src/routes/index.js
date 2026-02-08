import { Router } from "express";
import productRoutes from '../modules/product/product.routes.js';
import userRoutes from '../modules/user/user.routes.js';

const router = Router();

router.use('/admin', productRoutes);
router.use('/user',userRoutes);

export default router;