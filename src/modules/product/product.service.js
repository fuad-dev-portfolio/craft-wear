import Product from "./product.model.js";

export const createProductService = async(productData) => {
    const product = await Product.create(productData);
    return product;
};

export const getAllProductsService = async() =>{
    try {
        const products = await Product.find({}).sort({createdAt: -1})
        return products;
    } catch (error) {
        throw(error)
    }
};