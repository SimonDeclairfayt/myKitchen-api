import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import recipesRoute from "./routes/recipes.js";
import loginRoute from "./routes/login.js";
import User from "./models/users.js";
import cookieParser from "cookie-parser";
import auth from "./middleware/auth.js";
const app = express();
const PORT = 3333;

mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
db.on("error", (err) => {
  console.error(err);
});
db.once("open", () => {
  console.log("Connected to database");
});

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.use(loginRoute);
app.use(auth);

app.get("/", async (req, res) => {
  const users = await User.find();
  console.log(users);
  res.send(users);
});

app.use("/recipes", recipesRoute);

app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
