const router = require("express").Router();
const User = require("../models/User");

router.get("/users", async(req,res)=>{
  res.json(await User.find());
});

router.put("/kyc/:id", async(req,res)=>{
  const user = await User.findById(req.params.id);
  user.kycVerified = true;
  await user.save();

  res.json("KYC Done");
});

module.exports = router;