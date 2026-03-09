import { generateToken } from "../lib/token.js";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import cloudinary from "../lib/cloudinary.js";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res.status(400).json({ message: "all fiels must be required" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "password must be at least 6 letters" });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ message: "Email already exist try other email" });
    }

    //password hashed here
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashPassword,
    });

    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Invalid user data" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const newUser = await User.findOne({ email });

    if (!newUser) {
      return res.status(400).json({ message: "user in not found" });
    }

    const isMatchPassword = await bcrypt.compare(password, newUser.password);

    if (!isMatchPassword) {
      res.status(400).json({ message: "password is wrong" });
    }

    generateToken(newUser._id, res);

    res.status(200).json({
      id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      profilePic: newUser.profilePic,
    });
  } catch (error) {
    res.status(400).json({ message: "Internal Error" });
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "logout successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal error" });
  }
};

export const updateProfile = async (req, res) => {
  try {
    const { profilePic } = req.body;
    const userId = req.user._id;

    if (!profilePic) {
      return res.status(400).json({ message: "profile picture is required" });
    }
    const uploadPicture = await cloudinary.uploader.upload(profilePic);
    const newUser = await User.findByIdAndUpdate(
      userId,
      { profilePic: uploadPicture.secure_url },
      { new: true },
    );

    if (!newUser) {
      return res.status(400).json({ message: "user profile is not updated" });
    }

    return res.status(200).json(newUser);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const checkAuth = async (req, res) => {
  try {
    return res.status(200).json(req.user);
  } catch (error) {
    console.log("error in checkAuth", error.message);
    return res.status(500).status({ message: "Internal Server Error" });
  }
};
