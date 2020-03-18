import { FETCH_DATA, UPDATE_CHARACTERS } from "../actions/actions";

const initialState = {
  characters: [],
  isFetchingData: false
};

export const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetchingData: true,
        characters: []
      };
    case UPDATE_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
        isFetchingData: false
      };
    default:
      return state;
  }
};
