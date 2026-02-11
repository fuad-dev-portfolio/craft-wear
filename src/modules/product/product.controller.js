import { createProductService, getAllProductsService } from "./product.service.js";


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
            message: 'Product created successfully',
            data: product
        });
    } catch (error) {
        next(error)
    };
};

export const getAllProducts = async(req,res,next) => {
    try {
        const products = await getAllProductsService();
        res.status(200).json({
            success: true,
            data: products
        })
    } catch (error) {
        next(error)
    }
};