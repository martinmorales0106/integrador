import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/character/${detailId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.name) {
          setCharacter(data);
        } else {
          alert("No hay personajes con ese ID");
          navigate("/home");
        }
      })
      .catch((error) => console.log(error));
  }, [detailId, navigate]);

  return (
    <div className={styles.container}>
      <button onClick={() => navigate("/home")}>Regresar</button>
      <div className={styles.containerInfo}>
        <div>
          <h1>Name: {character.name}</h1>
          <h1>Status: {character.status}</h1>
          <h1>Species: {character.species}</h1>
          <h1>Gender: {character.gender}</h1>
          <h1>Origin: {character.origin?.name}</h1>
          <h1>Location: {character.location?.name}</h1>
        </div>
        <img src={character.image} alt={character.name} />
      </div>
    </div>
  );
}

export default Detail;
