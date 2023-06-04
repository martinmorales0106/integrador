// Con express
const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

// const getCharById = (req, res) => {
// Con promesas
// const { id } = req.params;
// axios
//   .get(URL + id)
//   .then((resp) => {

//     try {
//       const characterData = resp.data;
//       const character = {
//         id: id,
//         name: characterData.name,
//         gender: characterData.gender,
//         species: characterData.species,
//         origin: characterData.origin.name,
//         image: characterData.image,
//         status: characterData.status,
//       };
//       res.status(200);
//       res.json(character);

//      } catch (error) {
//       res.status(404);;
//       res.send("Not fount");
//     }})
//     .catch((reason) => {
//       res.status(500);;
//       res.json({message: reason.message});
//});
//};

// cons async y await, utilizando try y catch
const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(`${URL}/${id}`);
    const { name, gender, species, origin, image, status } = response.data;
    res.status(200).json({ id, name, gender, species, origin, image, status });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = getCharById;

// Sin express

// const axios = require("axios");

// const getCharById = (res, id) => {
//   axios
//     .get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((resp) => {
//       const characterData = resp.data;
//       const character = {
//         id: id,
//         name: characterData.name,
//         gender: characterData.gender,
//         species: characterData.species,
//         origin: characterData.origin.name,
//         image: characterData.image,
//         status: characterData.status,
//       };
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(character));
//     })
//     .catch((reason) => {
//       res.writeHead(500, { "Content-Type": "text/plain" });
//       res.end(reason.message);
//     });
// };

// module.exports = getCharById;
