const mongoose = require("mongoose");

const recipesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  ingredients: { type: [String], required: true },
  recipesSteps: { type: [String], required: true },
  duration: { type: Number, required: true },
  priceRange: { type: Number, required: true },
  servings: { type: Number, required: true },
  tags: { type: [String], required: true },
  nationality: { type: String, required: true },
});

module.exports = mongoose.model("Recipe", recipesSchema);
