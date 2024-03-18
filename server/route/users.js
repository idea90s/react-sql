import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("work on test ...");
});

export default router;
