import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://testuser:test123@cluster0.fnsssm0.mongodb.net/food-del').then(()=>("DB Connected"));
}