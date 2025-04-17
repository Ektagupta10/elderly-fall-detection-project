const express = require("express");
const router = express.Router();
const sendFallAlert = require("../services/emailservice");
const User = require("../models/User"); // adjust path if needed
const authMiddleware = require("../middleware/authMiddleware");

router.post("/fall-alert", async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await User.findById(userId);

    if (!user || !user.email) {
      return res.status(404).json({ success: false, message: "User or email not found" });
    }

    const message = `⚠️ Alert: Fall detected for ${user.name || "a loved one"}. Please check immediately!`;

    await  sendFallAlert(user.email, "Fall Detected", message);

    res.status(200).json({ success: true, message: "Email alert sent!" });
  } catch (err) {
    console.error("❌ Error sending email:", err);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

module.exports = router;
