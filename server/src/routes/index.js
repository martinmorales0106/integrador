const express = require("express");
const router = express.Router();

const {
  getCharById,
  deleteFav,
  postFav,
  login,
} = require("../controllers/index");

router.get("/character/:id", getCharById);
router.get("/login", login);
router.delete("/fav/:id", deleteFav);
router.post("/fav", postFav);

module.exports = router;