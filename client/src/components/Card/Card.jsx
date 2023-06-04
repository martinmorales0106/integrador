import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, deleteFavorite } from "../reducer/actions";
import styles from "./Card.module.css";

function Card(props) {
  const { name, species, gender, image, id, deleteFavorite, addFavorite, myFavorites } = props;

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      deleteFavorite(id);
    } else {
      setIsFav(true);
      addFavorite({ name, species, gender, image, id });
    }
  };

  useEffect(() => {
    const isFavorite = myFavorites.some((fav) => fav.id === id);
    setIsFav(isFavorite);
  }, [myFavorites, id]);

  return (
    <div className={styles.container}>
        <div className={styles.buttonContainer}>
          {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
          ) : (
            <button onClick={handleFavorite}>🤍</button>
          )}
          {!isFav && (
            <button className={styles.button} onClick={props.onClose}>
              X
            </button>
          )}
        </div>
    <Link to={`/detail/${id}`} className={styles.link}>
        <div className={styles.imageContainer}>
          <img src={image} alt="" />
          <h2 className={styles.name}>Nombre: {name}</h2>
        </div>
        <div className={styles.propsContainer}>
          <h2>{species}</h2>
          <h2>{gender}</h2>
        </div>
    </Link>
      </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (character) => {
      dispatch(addFavorite(character));
    },
    deleteFavorite: (id) => {
      dispatch(deleteFavorite(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);


