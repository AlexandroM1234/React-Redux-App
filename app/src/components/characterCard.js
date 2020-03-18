import React from "react";
import { connect } from "react-redux";
import { getCharacter } from "../actions/actions";

const CharacterCard = props => {
  const handleData = e => {
    e.preventDefault();
    props.getCharacter();
  };

  return (
    <div>
      <button onClick={handleData}>Click here to get characters</button>
    </div>
  );
};

const mapStatetoProps = state => {
  console.log("Tis state", state);

  return {
    // characters: state.characters,
    // isFetchingData: state.isFetchingData
  };
};

export default connect(mapStatetoProps, { getCharacter })(CharacterCard);
