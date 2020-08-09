import Axios from "axios";
export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_CHARACTERS = "UPDATE_CHARACTERS";

export const getCharacter = () => dispatch => {
  dispatch({ type: FETCH_DATA });
  Axios.get("https://rickandmortyapi.com/api/character/")
    .then(response => {
      console.log(response);
      dispatch({ type: UPDATE_CHARACTERS, payload: response.data.results });
    })
    .catch(error => {
      console.error("you done messed up error:", error);
    });
};
