import mongoose from "mongoose";

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Successfully connect with mongodb Database`);
    } catch (error) {
        console.log(`ERROR:${error.message}`);
        process.exit(1)
    }
}

export default connectDB