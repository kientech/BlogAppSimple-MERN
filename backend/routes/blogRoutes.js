import Blog from "../models/blogModels.js";
import express from "express";

const blogRouter = express.Router();

// route for create new blog
blogRouter.post("/", async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.author ||
      !req.body.description ||
      !req.body.category
    ) {
      return res.status(400).json({
        status: "error",
        message: "Please enter all the fields!!!",
      });
    }
    const newBlog = {
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      category: req.body.category,
      image: req.body.image
    };
    const blog = await Blog.create(newBlog);
    return res.status(200).json({
      status: "success",
      data: blog,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

// route for get all blogs
blogRouter.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    return res.status(200).json({
      status: "success",
      length: blogs.length,
      data: blogs,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

// route for get a blog with id
blogRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);
    return res.status(200).json({
      status: "success",
      data: blog,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

// route for update a blog
blogRouter.patch("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndUpdate(id, req.body);
    return res.status(200).json({
      status: "success",
      message: "Updated blog successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

// route for delete a blog
blogRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndDelete(id);
    return res.status(200).json({
      status: "success",
      message: "Delete blog successfully",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});

export default blogRouter;
