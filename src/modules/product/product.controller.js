import { createProductService } from "./product.service.js";

export const createProduct = async(req,res,next) => {
    try {
        const {product_name,price,color,image} = req.body;
        if(!req.file) {
            return res.status(400).json({message: 'Product image is required'})
        };
        const product = await createProductService({
            product_name,
            price,
            color,
            image: `/uploads/products/${req.file.filename}`
        });

        res.status(201).json({
            success: true,
            message: 'Poduct created successfully',
            data: product
        });
    } catch (error) {
        next(error)
    };
};