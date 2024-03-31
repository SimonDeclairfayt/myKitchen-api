require("dotenv").config();
const express = require("express");
const app = express();
const PORT = 3333;
const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
db.on("error", (err) => {
  console.error(err);
});
db.once("open", () => {
  console.log("Connected to database");
});

app.use(express.json());

const recipesRoute = require("./routes/recipes");
app.use("/recipes", recipesRoute);

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
