import mongoose from "mongoose";


const connectToMongoDB = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("Connected to MongoDB successfully.");
    } catch (error) {
        console.log("Error connecting to Mongodb: ", error.message);
    }
}


export default connectToMongoDB;