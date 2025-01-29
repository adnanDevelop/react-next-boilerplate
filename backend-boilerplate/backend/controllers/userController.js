import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../../models/userModel.js";

// Register controller
export const register = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, password, role } = req.body;
    if (!fullName || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "All fields are required",
        status: 400,
      });
    }
  } catch (error) {
    console.log("error while registering user", error.message);
    return res.status(400).json({
      message: error.message,
      status: 400,
    });
  }
};

// Login controller
export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({
        message: "All fields are required",
        status: 400,
      });
    }
  } catch (error) {
    console.log("error while login user", error.message);
    return res.status(400).json({
      message: error.message,
      status: 400,
    });
  }
};

// Logout controller
export const logout = async (req, res) => {
  try {
  } catch (error) {
    console.log("error while logout user", error.message);
    return res.status(400).json({
      message: error.message,
      status: 400,
    });
  }
};
