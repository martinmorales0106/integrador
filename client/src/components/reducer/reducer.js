import { ADD_FAVORITE, DELETE_FAVORITE } from "./actionsTypes";

const initialState = {
  myFavorites: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAVORITE:
      return { ...state, myFavorites: payload };

    case DELETE_FAVORITE:
      return { ...state, myFavorites: payload };
      
    default:
      return state;
  }
};

export default reducer;
