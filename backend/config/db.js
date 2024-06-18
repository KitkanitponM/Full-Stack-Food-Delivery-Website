import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://kitkanitponpim:141011@cluster0.2lyok69.mongodb.net/food-del').then(() => console.log("DB Connected"));
}