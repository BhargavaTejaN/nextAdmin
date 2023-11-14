import Product from './models/ProductSchema';
import User from './models/UserSchema';
import { connectToDB } from './server';

export const fetchUsers = async(q,page) => {

    const regex = new RegExp(q,'i');

    const ITEM_PER_PAGE = 2;

    try {
        connectToDB();
        const count = await User.find({username : {$regex : regex}}).count();
        const users = await User.find({username : {$regex : regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return {users,count};
    } catch (error) {
        console.log("Error While Fetching All Users : ",error);
        throw new Error("Failed To Fetch All Users");
    }
};

export const fetchProducts = async(q,page) => {
    const regex = new RegExp(q,'i');

    const ITEM_PER_PAGE = 2;

    try {

        connectToDB();
        const count = await Product.find({title : {$regex : regex}}).count();
        const products = await Product.find({title : {$regex : regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page - 1));
        return {count,products};
        
    } catch (error) {
        console.log("Error While Fetching All Products : ",error);
        throw new Error("Failed To Fetch All Products");
    }
};

export const fetchUser = async(id) => {
    try {

        connectToDB();
        const user = await User.findById(id);
        return user;
    } catch (error) {
        console.log("Error While Fetching The User : ",error);
        throw new Error("Failed To Fetch The User");
    }
};

export const fetchProduct = async(id) => {
    try {

        connectToDB();
        const product = await Product.findById(id);
        return product;
    } catch (error) {
        console.log("Error While Fetching the product : ",error);
        throw new Error("Failed to fetch the product");
    }
};