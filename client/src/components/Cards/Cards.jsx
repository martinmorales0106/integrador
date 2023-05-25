import React from 'react';
import Card from '../Card/Card';
import { Div } from '../assets/styledComponets';

export default function Cards(props) {
  const { characters } = props;

  return (
    <Div>
      {characters.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
          onClose={() => props.onClose(character.id)}
        />
      ))}
    </Div>
  );
}