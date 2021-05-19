const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/", async (req, res) => {
  try {
    const rawdata = fs.readFileSync(path.resolve(__dirname, "../data/db.json"));
    const products = JSON.parse(rawdata);
    res.json(products.products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
