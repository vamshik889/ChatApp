import mongoose from "mongoose";

  export default async function connectDB(){
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log("Mongodb connected successfully",conn.connection.host)
    } catch (error) {
        console.log("Mongo db connection error",error);
        process.exit(1)
    }
}