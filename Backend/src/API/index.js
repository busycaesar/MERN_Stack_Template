const express = require("express");
const router = express.Router();
const { getRoot } = require("./get");

router.get("/", getRoot);

module.exports = router;
