import axios from "axios";

export const FETCH_DATA = "FETCH_DATA";
export const UPDATE_CHARACTERS = "UPDATE_CHARACTERS";

export const getCharacterData = () => dispatch => {
  dispatch({ type: FETCH_DATA });
  axios
    .get("https://rickandmortyapi.com/api/character/")
    .then(Response => {
      console.log(Response.data);
    })
    .catch(error => {
      console.error("error getting data from api, error:", error);
    });
};
