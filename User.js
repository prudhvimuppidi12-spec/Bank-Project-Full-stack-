const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name:String,
  email:String,
  password:String,
  pan:String,
  aadhaar:String,
  balance:{type:Number,default:0},
  kycVerified:{type:Boolean,default:false}
});

module.exports = mongoose.model("User",userSchema);