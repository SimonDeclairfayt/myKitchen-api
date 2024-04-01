const express = require("express");
const Recipes = require("../models/recipes");
const router = express.Router();

// For all
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipes.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//For one
router.get("/:id", (req, res) => {});

//Creating one
router.post("/", async (req, res) => {
  const recipe = new Recipes();
});

// Update one
router.patch("/", (req, res) => {});

//Delete one
router.delete("/:id", (req, res) => {});

module.exports = router;
