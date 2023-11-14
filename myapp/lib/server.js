import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URL) return console.log("MONGODB_URL Not Found");

  if (isConnected) return console.log("Already Connected!!!");

  try {
    await mongoose.connect(process.env.MONGODB_URL);
    isConnected = true;
    console.log("Connected To MONGODB");
  } catch (error) {
    console.log("ERROR WHILE CONNECTING TO MONGODB : ", error);
  }
};
