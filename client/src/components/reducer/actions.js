import axios from "axios";
const endpoint = "http://localhost:3001/rickandmorty/favorites";

export const addFavorite = (character) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: "ADD_FAVORITE",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteFavorite = (id) => {
  const deleteEndpoint = `${endpoint}/${id}`;
  return (dispatch) => {
    axios.delete(deleteEndpoint).then(({ data }) => {
      return dispatch({
        type: "DELETE_FAVORITE",
        payload: data,
      });
    });
  };
};


// // import { ADD_FAVORITE, DELETE_FAVORITE } from "./actionsTypes";
// import axios from "axios";
// const endpoint = "http://localhost:3001/rickandmorty/fav";

// // export const addFavorite = (character) => {
// //   return {
// //     type: ADD_FAVORITE,
// //     payload: character,
// //   };
// // };

// // ACTION | addFav
// // Con promesas

// // export const addFavorite = (character) => {
// //   const endpoint = "http://localhost:3001/rickandmorty/fav";
// //   return (dispatch) => {
// //     axios.post(endpoint, character).then(({ data }) => {
// //       return dispatch({
// //         type: "ADD_FAVORITE",
// //         payload: data,
// //       });
// //     });
// //   };
// // };

// // con async y await
// export const addFavorite = (character) => {
//   return async (dispatch) => {
//     try {
//       const { data } = await axios.post(endpoint, character);
//       return dispatch({
//         type: "ADD_FAVORITE",
//         payload: data,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };


// // export const deleteFavorite = (id) => {
// //   return {
// //     type: DELETE_FAVORITE,
// //     payload: id,
// //   };
// // };

// // ACTION | removeFav
// export const deleteFavorite = (id) => {
//   const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
//   return (dispatch) => {
//     axios.delete(endpoint).then(({ data }) => {
//       return dispatch({
//         type: "DELETE_FAVORITE",
//         payload: data,
//       });
//     });
//   };
// };
