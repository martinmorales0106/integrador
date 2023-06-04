import React from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";
import { Div } from "../assets/styledComponets";
import styles from "./Favorites.module.css";

function Favorites({ myFavorites }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mis Favoritos</h1>
      <Div className={styles.cardContainer}>
        {myFavorites?.map(({ name, species, gender, image, id }) => (
          <Card
            id={id}
            key={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
          />
        ))}
      </Div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
