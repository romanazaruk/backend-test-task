const express = require("express");
const router = express.Router();
const catApi = require("../catApi/index");

async function getCatImage(req, res, next) {
  try {
    const result = await catApi.fetchImg();
    res.json(result.data);
  } catch (e) {
    next(e);
  }
}

router.get("/cat-image", getCatImage);

module.exports = router;
