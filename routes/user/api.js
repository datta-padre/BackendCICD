import express from "express";

const route = express.Router();

route.get("/", (req, res) => {
  res.send("Welcome To User Api");
});

export default route;
