import express from "express";
import bcrypt from "bcrypt";
import User from "../models/users.js";
import jwt from "jsonwebtoken";
const loginRoute = express.Router();

loginRoute.post("/register", async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const userName = req.body.username;
  if (!email || !password || !userName)
    return res.status(400).send("Missing Value");
  const newUser = new User({
    username: userName,
    email: email,
    password: password,
  });
  try {
    await newUser.save();
    console.log(newUser);
    return res.status(201).send("Success");
  } catch (err) {
    console.log(err);
  }
});
loginRoute.post("/login", async (req, res) => {
  const email = req.body.email;
  const currentPassword = req.body.password;
  if (!email || !currentPassword) {
    return !email
      ? res.status(400).send("Missing Email")
      : res.status(400).send("Missing password");
  }
  const findUser = await User.findOne({
    email: email,
  });
  //IF USER IN DB
  if (findUser) {
    const match = await bcrypt.compare(currentPassword, findUser.password);
    if (match) {
      //IF GOOD PASSWORD CREATE JWT
      let token = jwt.sign(
        {
          id: findUser._id,
          username: findUser.username,
          email: findUser.email,
        },
        process.env.STRONG_KEY,
        { expiresIn: "8h" }
      );
      res.cookie("token", token, {
        httpOnly: true,
      });
      return res.status(200).send("Login successfull");
    } else {
      //IF WRONG PASSWORD
      return res.send("Wrong Password");
    }
  } //IF USER NOT IN DB
  else {
    return res.send("No user with that email");
  }
});
export default loginRoute;
