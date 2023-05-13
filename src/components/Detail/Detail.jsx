import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});
  const navigate = useNavigate("/home");

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.name) {
          setCharacter(data);
        } else {
          alert("No hay personajes con ese ID");
        }
      })
      .catch((error) => console.log(error));
    return setCharacter({});
  }, [detailId]);
  return (
    <div className={styles.container}>
      <button onClick={navigate}>Regresar</button>
      <div className={styles.containerInfo}>
        <div>
          <h1>Name: {character.name}</h1>
          <h1>Status: {character.status}</h1>
          <h1>Specie: {character.species}</h1>
          <h1>Gender: {character.gender}</h1>
          <h1>Origin: {character.origin?.name}</h1>
          <h1>Name: {character.name}</h1>
        </div>
        <img src={character.image} alt={character.name} />
      </div>
    </div>
  );
}

export default Detail;
