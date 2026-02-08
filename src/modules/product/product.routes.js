import { Router } from "express";
import { createProduct } from "./product.controller.js";
import { uploadProductImage } from "../../middleware/upload.middleware.js";

const router = Router();

router.post(
    '/newproduct',
    uploadProductImage.single('image'),
    createProduct,
);

export default router;