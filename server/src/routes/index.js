const express = require("express");
const router = express.Router();

const {
  getCharById,
  deleteFav,
  postFav,
  login,
} = require("../controllers/index");
const postUser = require("../controllers/postUser");

router.get("/character/:id", getCharById);
router.post("/login", postUser);
router.get("/login", login);
router.delete("/fav/:id", deleteFav);
router.post("/fav", postFav);

module.exports = router;