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
  const recipe = new Recipes({
    name: req.body.name,
    ingredients: req.body.ingredients,
    recipesSteps: req.body.recipesSteps,
    duration: req.body.duration,
    priceRange: req.body.priceRange,
    servings: req.body.servings,
    tags: req.body.tags,
    nationality: req.body.nationality,
  });
  try {
    const newRecipe = await recipe.save();
    return res.status(201).json(newRecipe);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: err.message });
  }
});

// Update one
router.patch("/", (req, res) => {});

//Delete one
router.delete("/:id", (req, res) => {});

module.exports = router;
