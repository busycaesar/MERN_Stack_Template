const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("Received GET/ request!");
  res.status(200).json("Hello from Backend!");
});

module.exports = router;
