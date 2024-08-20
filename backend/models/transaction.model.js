import mongoose from "mongoose";
 const transactionSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true ,
    },
    description: {
       type: String,
       required: true,
    },
    paymentType: {
        type: String,
        enum: ["cash", "card"],
        required: true,
    },
    category: {
        type: String,
        enum: ["savings", "expense", "investment"],
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        default: "Unknown"
     },
     date: {
         type: date,
         required: true,
     },
 });

 const Transaction = mongoose.model("Transaction", userSchema);

 export default Transaction;