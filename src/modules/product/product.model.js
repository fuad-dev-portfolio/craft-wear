import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    color: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String, // store image URL or path
      required: true,
    },
  },
  
  { timestamps: true }
)

const Product = mongoose.model('Product', productSchema)

export default Product
