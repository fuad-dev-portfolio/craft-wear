import { Router } from "express";
import { getAllProducts } from "../product/product.controller.js";

const router = Router();

router.get(
    '/allproducts',
    getAllProducts
);

export default router;