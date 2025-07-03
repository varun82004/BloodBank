import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";
dotenv.config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Connected To MongoDB Database ${mongoose.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`MongoDB Database Error ${error}`.bgRed.white);
  }
};

export default connectDB;
