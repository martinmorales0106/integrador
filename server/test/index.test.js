const app = require("../src/app");
const session = require("supertest");
const agent = session(app);

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("GET Responde con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const response = await agent.get("/rickandmorty/character/1");
      expect(response.body).toHaveProperty("id");
      expect(response.body).toHaveProperty("name");
      expect(response.body).toHaveProperty("species");
      expect(response.body).toHaveProperty("gender");
      expect(response.body).toHaveProperty("status");
      expect(response.body).toHaveProperty("origin");
      expect(response.body).toHaveProperty("image");
    });

    it("Si hay un error responde con status: 500", async () => {
      await agent.get("/rickandmorty/character/malid").expect(500);
    });
  });

  describe("GET /rickandmorty/login", () => {
    it("Validando el acceso, debe responder con true si las credenciales son correctas", async () => {
      const response = await agent.get(
        "/rickandmorty/login?email=mar@gmail.com&password=123456"
      );
      expect(response.body.access).toBe(true);
    });
    it("Validando el acceso, debe responder con false si las credenciales son incorrectas", async () => {
      const response = await agent.get(
        "/rickandmorty/login?email=mar@gmail.com&password=123456"
      );
      expect(response.body.access).toBe(true);
    });
  });

  describe("POST /rickandmorty/fav", () => {
    it("Lo que envíes por body debe ser devuelto en un arreglo", async () => {
      const character = { id: 1, name: "Rick Sanchez" };
      const { body } = await agent.post("/rickandmorty/fav").send(character);
      expect(body).toBeInstanceOf(Array);
    });

    it("Si envías un nuevo elemento por body, este debe ser devuelto en un arreglo que incluye un elemento enviado previamente", async () => {
      const character = { id: 2, name: "Morty Smith" };
      const { body } = await agent.post("/rickandmorty/fav").send(character);
      expect(body).toContainEqual({ id: 1, name: "Rick Sanchez" });
      expect(body).toContainEqual({ id: 2, name: "Morty Smith" });
    });
  });

  describe("DELETE /rickandmorty/fav/:id", () => {
    it("Si el ID enviado no coincide con ningún personaje, devuelve un arreglo con los elementos previos sin modificar", async () => {
      const requestData1 = { id: 1, name: "Rick Sanchez" };
      const requestData2 = { id: 2, name: "Morty Smith" };
  
      // Agregamos los personajes al arreglo inicial
      await agent.post("/rickandmorty/fav").send(requestData1);
      await agent.post("/rickandmorty/fav").send(requestData2);
  
      const invalidId = 999; // ID que no existe
  
      const response = await agent.delete(`/rickandmorty/fav/${invalidId}`).expect(200);
  
      expect(response.body).toEqual(expect.arrayContaining([requestData1, requestData2]));
    });
  
    it("Si envías un ID válido, elimina correctamente al personaje", async () => {
      const requestData1 = { id: 1, name: "Rick Sanchez" };
      const requestData2 = { id: 2, name: "Morty Smith" };
  
      // Agregamos los personajes al arreglo inicial
      await agent.post("/rickandmorty/fav").send(requestData1);
      await agent.post("/rickandmorty/fav").send(requestData2);
  
      const validId = 1; // ID válido para eliminar a Rick Sanchez
  
      await agent.delete(`/rickandmorty/fav/${validId}`).expect(200);
  
      const updatedResponse = await agent.get("/rickandmorty/fav").expect(200);
  
      expect(updatedResponse.body).not.toContainEqual(requestData1);
      expect(updatedResponse.body).toContainEqual(requestData2);
    });
  });
  
});
