"use server"
import bcrypt from 'bcrypt';
import { revalidatePath } from 'next/cache';
import { redirect } from "next/navigation";

import { connectToDB } from "../server";
import User from '../models/UserSchema';

export const addUser = async(formData) => {
    const {username, email, password, phone, address, isAdmin, isActive} = Object.fromEntries(formData);

    try {

        connectToDB();
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
            phone,
            address,
            isAdmin,
            isActive,
        });
        
    } catch (error) {
        console.log("Error While Adding New user : ",error);
        throw new Error("Failed To Add New User");
    }
    revalidatePath('/dashboard/users');
    redirect("/dashboard/users");
};

export const updateUser = async(formData) => {
    const { id, username, email, password, phone, address, isAdmin, isActive } = Object.fromEntries(formData);

    try {

        connectToDB();

        const updateFields = {
            username,
            email,
            password,
            phone,
            address,
            isAdmin,
            isActive,
        };

        Object.keys(updateFields).forEach((key) => (updateFields[key] === "" || undefined) && delete updateFields[key]);

        await User.findByIdAndUpdate(id,updateFields);
        
    } catch (error) {
        console.log("Error While Updating The user : ",error);
        throw new Error("Failed To Update the user")
    }
    revalidatePath('/dashboard/users');
    redirect("/dashboard/users");
};

export const deleteUser = async(formData) => {
    const {id} = Object.fromEntries(formData);

    try {
        connectToDB();
        await User.findByIdAndDelete(id);
    } catch (error) {
        console.log("Error While Deleting The User : ",error);
        throw new Error("Failed to Delete the User");
    }
    revalidatePath('/dashboard/users');
    redirect("/dashboard/users");
};