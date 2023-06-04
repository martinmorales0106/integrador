import React, { useState } from 'react';
import styles from "./SearchBar.module.css";

function SearchBar(props) {
   const [searchValue, setSearchValue] = useState("");

   function handleInputChange(event) {
      setSearchValue(event.target.value);
   }

   function handleAddButtonClick() {
      props.onSearch(searchValue);
   }

   return (
      <div className={styles.container}>
         <input
            type="text"
            value={searchValue}
            onChange={handleInputChange}
            placeholder="Buscar personaje"
         />
         <button onClick={handleAddButtonClick}>Buscar</button>
      </div>
   );
}

export default SearchBar;
