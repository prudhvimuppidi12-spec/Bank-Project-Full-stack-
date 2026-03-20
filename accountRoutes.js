const router = require("express").Router();
const User = require("../models/User");
const Transaction = require("../models/Transaction");
const Notification = require("../models/Notification");


router.post("/deposit", async (req, res) => {
  const { userId, amount } = req.body;

  const user = await User.findById(userId);
  user.balance += amount;
  await user.save();

  await Transaction.create({
    sender: user.email,
    receiver: user.email,
    amount,
    type: "deposit",
    senderId: user._id,
    receiverId: user._id
  });

  await Notification.create({
  userId: user._id,
  message: `₹${amount} deposited successfully`
  });

  res.json(user);
});

// ✅ WITHDRAW (FIXED)
router.post("/withdraw", async (req, res) => {
  const { userId, amount } = req.body;

  const user = await User.findById(userId);

  if (user.balance < amount)
    return res.status(400).json("Insufficient");

  user.balance -= amount;
  await user.save();

  await Transaction.create({
    sender: user.email,
    receiver: user.email,
    amount,
    type: "withdraw",
     senderId: user._id,
    receiverId: user._id
  });

  await Notification.create({
    userId: user._id,
    message: `₹${amount} withdrawn`
  });

  res.json(user);
});

// ✅ KYC (NOW OUTSIDE ✅)
router.post("/kyc", async (req, res) => {
  try {
    const { userId } = req.body;

    const user = await User.findById(userId);

    if (!user) return res.status(404).json("User not found");

    user.kycVerified = true;
    await user.save();

    await Notification.create({
      userId: user._id,
      message: `KYC completed successfully`
     });

    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json("Server error");
  }
});

module.exports = router;