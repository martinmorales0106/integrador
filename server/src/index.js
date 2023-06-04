// Express

const express = require("express");
const server = express();
const PORT = 3001;
const getCharById = require("./controllers/getCharById");
const router = require("./routes/index");

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json());
server.use("/rickandmorty", router)

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
