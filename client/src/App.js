import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Cards from "./components/Cards/Cards";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Forms/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const userName = "mar@gmail.com";
  const password = "123456";
  //   const example = {
  //     id: 1,
  //     name: "Rick Sanchez",
  //     status: "Alive",
  //     species: "Human",
  //     gender: "Male",
  //     origin: {
  //       name: "Earth (C-137)",
  //       url: "https://rickandmortyapi.com/api/location/1",
  //     },
  //     image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  //   };

  const onSearch = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => {
        (
          data.name
            ? characters.filter((char) => char.id === data.id).length === 0
            : ""
        )
          ? setCharacters([...characters, data])
          : alert("Ya existe un personaje con ese Id");
      })
      .catch((error) => console.log(error));
  };

  const onClose = (id) => {
    const filtered = characters.filter((char) => char.id !== Number(id));
    setCharacters(filtered);
  };

  const login = (userData) => {
    if (userData.userName === userName && userData.password === password) {
      setAccess(true);
      navigate("/home");
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
