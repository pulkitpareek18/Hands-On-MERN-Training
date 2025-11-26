// DATABASE.JS CODE
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
        });
        console.log('MongoDB connected successfully');
    }
    catch(e){
        console.log("Error Occurred During Mongo Connection: " + e)
    }
};

export {connectDB}