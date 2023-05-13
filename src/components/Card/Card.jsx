import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../reducer/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card(props) {
  const { name, species, gender, image, onClose, id, deleteFavorite, addFavorite, myFavorites } = props;

  const [isFav, setIsFav] = useState(false);
  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      deleteFavorite(id);
    } else {
      setIsFav(true);
      addFavorite({ name, species, gender, image, onClose, id });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === props.id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);

  return (
    <Link to={`/detail/${id}`} className={styles.Link}>
      <div className={styles.container}>
        <div className={styles.buttonContainer}>
          {isFav ? (
            <button onClick={handleFavorite}>❤️</button>
          ) : (
            <button onClick={handleFavorite}>🤍</button>
          )}
          {isFav ? null : (<button className={styles.button} onClick={onClose}>
            X
          </button>)}
        </div>
        <div className={styles.imageContainer}>
          <img src={image} alt="" />
          <h2 className={styles.name}>Nombre: {name}</h2>
        </div>
        <div className={styles.propsContainer}>
          <h2>{species}</h2>
          <h2>{gender}</h2>
        </div>
      </div>
    </Link>
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
