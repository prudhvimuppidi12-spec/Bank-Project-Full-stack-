const router = require("express").Router();
const Notification = require("../models/Notification");

router.get("/:userId", async (req, res) => {
  const data = await Notification.find({
    userId: req.params.userId
  }).sort({ date: -1 });

  res.json(data);
});

module.exports = router;