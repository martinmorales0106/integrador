import React from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";
import { Div } from "../assets/styledComponets";

function Favorites({ myFavorites }) {
  return (
    <Div>
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
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
