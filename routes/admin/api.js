import express from 'express';
const route = express.Router();

route.get("/", (req, res) => {
  res.send("Welcome To Admin Api")
});

export default route;
