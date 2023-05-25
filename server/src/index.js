const http = require("http");
const data = require("./utils/data");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  console.log(res.url);
  try {
    if (req.url.includes("/rickandmorty/character")) {
      const id = req.url.split("/").pop();
      console.log(id);
      const character = data.find((char) => char.id === Number(id));
      console.log(character);

      if (character) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(character));
      } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: `Character not found with id: ${id}` }));
      }
    }
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
});

server.listen(3001, () => {
  console.log("Server listening on port 3001");
});
