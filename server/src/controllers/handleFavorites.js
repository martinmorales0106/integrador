// let myFavorites = [];

// const postFav = (req, res) => {
//   const { character } = req.body;
//   myFavorites.push(character);
//   res.json(myFavorites);
// };

// const deleteFav = (req, res) => {
//   const { id } = req.params;
//   myFavorites = myFavorites.filter((fav) => fav.id !== parseInt(id));
//   res.json(myFavorites);
// };

// module.exports = { postFav, deleteFav };

const { Favorite } = require("../DB_connection");

const postFav = async (req, res) => {
  const { name, origin, status, image, species, gender } = req.body;

  try {
    if (!name || !origin || !status || !image || !species || !gender)
      return res.status(401).send("Faltan datos");
    await Favorite.findOrCreate({
      where: { name, origin, status, image, species, gender },
    });

    const favs = await Favorite.findAll();
    return res.status(200).json(favs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteFav = async (req, res) => {
  const { id } = req.params;

  try {
    await Favorite.destroy({ where: { id } });
    const favs = await Favorite.findAll();
    return res.status(200).json(favs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { postFav, deleteFav };
