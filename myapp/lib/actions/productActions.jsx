"use server"

import { revalidatePath } from 'next/cache';
import { redirect } from "next/navigation";

import { connectToDB } from "../server";
import Product from '../models/ProductSchema';

export const addProduct = async(formData) => {
    const {title, desc, price, stock, color, size} = Object.fromEntries(formData);

    try {

        connectToDB();

        const newProduct = await Product.create({
            title,
            desc,
            price,
            stock,
            color,
            size,
        });
        
    } catch (error) {
        console.log("Error While Adding New Product : ",error);
        throw new Error("Failed To Add New Product");
    }
    revalidatePath('/dashboard/products');
    redirect("/dashboard/products");
};

export const updateProduct = async(formData) => {
    const { id, title, desc, price, stock, color, size } = Object.fromEntries(formData);

    try {

        connectToDB();

        const updateFields = {
            title,
            desc,
            price,
            stock,
            color,
            size,
        };

        Object.keys(updateFields).forEach((key) => (updateFields[key] === "" || undefined) && delete updateFields[key]);

        await Product.findByIdAndUpdate(id,updateFields);
        
    } catch (error) {
        console.log("Error While Updating The Product : ",error);
        throw new Error("Failed To Update the Product")
    }
    revalidatePath('/dashboard/products');
    redirect("/dashboard/products");
};

export const deleteProduct = async(formData) => {
    const {id} = Object.fromEntries(formData);

    try {
        connectToDB();
        await Product.findByIdAndDelete(id);
    } catch (error) {
        console.log("Error While Deleting The Product : ",error);
        throw new Error("Failed to Delete the Product");
    }
    revalidatePath('/dashboard/products');
    redirect("/dashboard/products");
};