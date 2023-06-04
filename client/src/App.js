import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Cards from "./components/Cards/Cards";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Forms/Form";
import Favorites from "./components/Favorites/Favorites";
import axios from "axios";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const onSearch = async (id) => {
    try {
      if (!id) {
        return alert("ID de personaje no proporcionado");
      }

      const { data } = await axios.get(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      const char = characters.find((char) => char.id === data.id);
      if (char) {
        return alert("Personaje ya existe");
      }
      setCharacters([...characters, data]);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    console.log(access);
  }, [access]);

  const onClose = (id) => {
    const filtered = characters.filter((char) => char.id !== Number(id));
    setCharacters(filtered);
  };

  const login = async (userData) => {
    try {
      const { userName, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(
        URL + `?email=${userName}&password=${password}`
      );
      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
