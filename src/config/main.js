import mongoose from "mongoose";


export const Dbconnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_DB,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log('mongodb connection established');
    } catch (error) {
        console.log("Error connecting to MongoDB")
    }
}

