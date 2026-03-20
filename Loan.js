const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  userId:String,
  amount:Number,
  months:Number,
  interest:Number,
  status:{type:String,default:"pending"}
});

module.exports = mongoose.model("Loan",schema);