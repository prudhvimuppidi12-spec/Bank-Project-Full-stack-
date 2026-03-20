const router = require("express").Router();
const User = require("../models/User");
const Transaction = require("../models/Transaction");



router.post("/transfer", async (req, res) => {
  try {
    const { senderId, receiverEmail, amount } = req.body;

    // find users
    const sender = await User.findById(senderId);
    const receiver = await User.findOne({ email: receiverEmail });

    if (!sender) return res.status(404).json("Sender not found");
    if (!receiver) return res.status(404).json("Receiver not found");

    if (sender.balance < amount) {
      return res.status(400).json("Insufficient balance");
    }

    // update balances
    sender.balance -= amount;
    receiver.balance += amount;

    await sender.save();
    await receiver.save();

    // save transaction
    await Transaction.create({
      sender: sender.email,
      receiver: receiver.email,
      amount,
      type: "transfer",
      senderId: sender._id,    
      receiverId: receiver._id  
    });

    res.json(sender); // return updated sender
  } catch (err) {
    console.error(err);
    res.status(500).json("Transfer failed");
  }
});


// GET USER TRANSACTIONS
router.get("/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    const transactions = await Transaction.find({
      $or: [
        { senderId: userId },
        { receiverId: userId }
      ]
    }).sort({ createdAt: -1 }); 

    res.json(transactions);
  } catch (err) {
    console.error(err);
    res.status(500).json("Error fetching transactions");
  }
});


// OPTIONAL: DELETE ALL (for testing)
router.delete("/clear/all", async (req, res) => {
  try {
    await Transaction.deleteMany({});
    res.json("All transactions cleared");
  } catch (err) {
    res.status(500).json("Delete failed");
  }
});


module.exports = router;