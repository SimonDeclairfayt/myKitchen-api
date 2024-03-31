const express = require("express");
const router = express.Router();

// For all
router.get("/", (req, res) => {
  res.send("Hello World");
});

//For one
router.get("/:id", (req, res) => {});

//Creating one
router.post("/:id", (req, res) => {});

// Update one
router.patch("/", (req, res) => {});

//Delete one
router.delete("/:id", (req, res) => {});

module.exports = router;
