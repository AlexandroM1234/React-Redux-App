import React from "react";
import { connect } from "react-redux";
import { getCharacter } from "../actions/actions";

const CharacterList = props => {
  console.log(props);
  return <div></div>;
};

const mapStatetoProps = state => {
  console.log("Tis state", state);

  return {
    // characters: state.characters,
    // isFetchingData: state.isFetchingData
  };
};

export default connect(mapStatetoProps, { getCharacter })(CharacterList);
