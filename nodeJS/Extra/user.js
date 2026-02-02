const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(express.json());

//  MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/Extradb")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
      maxlength: 160,
    },
    avatar: {
      type: String,
    },
    followersCount: {
      type: Number,
      default: 0,
    },
    followingCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

const User = require("./user"); 

app.post("/api/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/api/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.put("/api/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete("/api/users/:id", async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
    }
});

// Server Start
app.listen(3000, () => {
  console.log("Server running on port 3000");
});