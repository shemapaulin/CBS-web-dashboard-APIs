import jwt from "jsonwebtoken";

import User from "../Models/User.js";
import userSchema from "../utils/validations/userSchema.js";
import reportJoiError from "../utils/functions/reportError.js";
import { encode, getPurePassword } from "../utils/functions/encodePassword.js";

const createUserAccount = async (req, res) => {
  try {
    const inputValidation = userSchema.validate(req.body);
    if (inputValidation.error) return reportJoiError(inputValidation, res);
    req.body.password = await encode(req.body.password);
    let password = req.body.password;
    let email = req.body.email;
    let name = req.body.username;
    const userInputs = {
      password,
      email,
      name,
    };

    let user = User.create(userInputs);

    if (user)
      res.status(200).json({
        message: "you have succesfully created Account",
        result: req.body,
      });
  } catch (error) {
    console.error(error);
    res.status(500).send(`500 Internal error : ${error}`);
  }
};

const userLogin = async (req, res) => {
  try {
    const { body } = req;
    const { email, password } = body;
    const inputValidation = userSchema.validate(req.body);
    if (inputValidation.error) return reportJoiError(inputValidation, res);
    const user = await User.findOne({ where: { email: email } });

    if (!user) return res.status(401).send(`Incorrect username or password`);
    const decodedPassword = await getPurePassword(password, user.password);

    if (password != decodedPassword)
      return res.status(401).send(`Incorrect username or password`);

    let userInfo = {
      username: user.username,
      email: user.email,
      password: user.password,
    };

    jwt.sign(
      { userInfo },
      process.env.SECRET_KEY,
      { expiresIn: "20m" },
      (err, token) => {
        if (err) return console.error(err);
        res.status(200).json({
          message: "Logged in successfully",
          token: token,
        });
      }
    );
  } catch (error) {
    console.log(error);
    res.send(`500 Server Error : `, error);
  }
};

const getUser = async (req, res) => {
  const userId = req.body.userId;
  const user = await User.findOne({ where: { userId: userId } });
  console.log(user);
  if (user) {
    res.json({ result: user });
    console.log(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};
const getUsers = async (req, res) => {
  const userId = req.body.userId;
  const user = await User.findAll();
  if (user) {
    res.json({ result: user });
  } else {
    res.status(404).json({ message: "No record found" });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const inputValidation = userSchema.validate(req.body);
    if (inputValidation.error) return reportJoiError(inputValidation, res);
    req.body.password = await encode(req.body.password);
    let password = req.body.password;
    let email = req.body.email;
    let name = req.body.username;
    const userInputs = {
      password,
      email,
      name,
    };

    const userUpdate = await User.update(userInputs, {
      where: { userId: userId },
    });

    if (userUpdate) {
      res.status(200).json({
        message: "you have succesfully updated Account",
        result: req.body,
      });
    } else {
      res.status(404).send("user not found or no changes made");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(`500 Internal error : ${error}`);
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findOne({ where: { userId: userId } });
    let destroyUser = await user.destroy();
    if (destroyUser) {
      res.status(200).json({
        message: "you have succesfully deleted Account",
        result: User,
      });
    } else {
      res.status(404).send("user not found ");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(`500 Internal error : ${error}`);
  }
};

export {
  createUserAccount,
  userLogin,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
};
