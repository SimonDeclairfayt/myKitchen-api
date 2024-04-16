import mongoose from "mongoose";
import User from "./users.js";
const recipesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: [{ name: String, quantity: Number, unit: String }],
  recipesSteps: { type: [String], required: true },
  duration: { type: Number, required: true },
  priceRange: { type: Number, required: true },
  servings: { type: Number, required: true },
  tags: { type: [String], required: true },
  nationality: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: User, required: true },
});

const Recipe = mongoose.model("Recipe", recipesSchema);

export default Recipe;
