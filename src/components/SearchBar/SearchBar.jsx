import React, {useState} from 'react';
import styles from "./SearchBar.module.css"

function SearchBar(props) {
   const [characters, setCharacters] = useState("");

   function handleInputChange(event) {
      setCharacters(event.target.value);
   }

   function handleAddButtonClick() {
      props.onSearch(characters);
   }

   return (
      <div className={styles.container}>
         <input type='text' value={characters} onChange={handleInputChange} />
         <button onClick={handleAddButtonClick}>Agregar</button>
      </div>
   );
}

export default SearchBar