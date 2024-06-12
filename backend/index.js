import { mongoDB } from "./config.js";
import mongoose from "mongoose";
import express from "express";
import blogRouter from "./routes/blogRoutes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).send("Blog Application - Kien Tech");
});

app.use("/blogs", blogRouter);

mongoose.connect(mongoDB).then(() => {
  app.listen(4040, () => {
    console.log("App listening on port 4040 ...");
  });
  console.log("Blog App connected to database");
});
