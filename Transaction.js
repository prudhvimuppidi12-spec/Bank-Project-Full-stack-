const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    sender: String,
    receiver: String,
    amount: Number,
    type: String,

    senderId: String,    
    receiverId: String    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);