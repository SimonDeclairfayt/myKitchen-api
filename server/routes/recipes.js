import express from "express";
import Recipe from "../models/recipes.js";
const router = express.Router();

// For all
router.get("/", async (req, res) => {
  try {
    const allRecipes = await Recipe.find({ userId: req.user.id });
    res.send(allRecipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Creating one
router.post("/", async (req, res) => {
  const recipe = new Recipe({
    name: req.body.name,
    ingredients: req.body.ingredients,
    recipesSteps: req.body.recipesSteps,
    duration: req.body.duration,
    priceRange: req.body.priceRange,
    servings: req.body.servings,
    tags: req.body.tags,
    nationality: req.body.nationality,
    userId: req.user.id,
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
router.delete("/recipes", async (req, res) => {
  const recipeName = req.body.name;
  const findRecipe = await Recipe.find({ name: req.body.name });
});

export default router;
