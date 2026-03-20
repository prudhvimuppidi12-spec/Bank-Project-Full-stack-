const router = require("express").Router();
const Loan = require("../models/Loan");

router.post("/apply", async(req,res)=>{
  const {userId,amount,months} = req.body;

  const loan = await Loan.create({
    userId,amount,months,interest:10
  });

  res.json(loan);
});

router.get("/:userId", async(req,res)=>{
  const data = await Loan.find({userId:req.params.userId});
  res.json(data);
});

module.exports = router;