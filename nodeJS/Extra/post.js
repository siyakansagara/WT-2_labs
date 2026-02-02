const mongoose = require("mongoose");
const express = require("express");
const app = express();

app.use(express.json());

//  MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/Extradb")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    caption: {
      type: String,
      maxlength: 2200,
    },
    images: [
      {
        type: String, // URL or path
      },
    ],
    likesCount: {
      type: Number,
      default: 0,
    },
    commentsCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
const Post = require("./post");

app.post("/api/posts", async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/api/posts", async (req, res) => {
  try {
    const posts = await Post.find().populate("userId", "username fullName avatar").sort({ createdAt: -1 });
    res.json(posts);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete("/api/posts/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json({ message: "Post deleted successfully" });
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.put("/api/posts/:id", async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { $inc: { likesCount: 1 } },
      { new: true }
    );
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.json(post);
  } 
  catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Server Start
app.listen(3000, () => {
  console.log("Server running on port 3000");
});