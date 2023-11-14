import mongoose, { Schema, model, models } from "mongoose";

const productSchema = new Schema(
    {
      title: {
        type: String,
        required: true,
        unique: true,
      },
      desc: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
        min: 0,
      },
      stock: {
        type: Number,
        required: true,
        min: 0,
      },
      img: {
        type: String,
      },
      color: {
        type: String,
      },
      size: {
        type: String,
      },
    },
    { timestamps: true }
);

const Product = models.Product || model('Product',productSchema);
export default Product;