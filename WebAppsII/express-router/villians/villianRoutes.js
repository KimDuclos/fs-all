const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  res.status(200).json(villians.push("PorkChop"));
});

router.get("/", (req, res) => {
  const villians = ["cheeseFace", "Poophead", "crunchMunch", "Poot"];

  res.status(200).json(villians);
});

module.exports = router;
