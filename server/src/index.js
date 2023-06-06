const PORT = 3001;
const server = require("./app")



server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
});


// HTTP

// const http = require("http");
// const data = require("./utils/data");
// const getCharById = require("./controllers/getCharById");

// const server = http.createServer((req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   console.log(res.url);
//   try {
//     if (req.url.includes("/rickandmorty/character")) {
//       const id = req.url.split("/").pop();
//       console.log(id);
//       getCharById(res, id);
//     }
//   } catch (error) {
//     console.log(error);
//     throw new Error(error);
//   }
// });

// server.listen(3001, () => {
//   console.log("Server listening on port 3001");
// });
