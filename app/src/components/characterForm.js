import React from "react";
import { connect } from "react-redux";
import { getCharacter } from "../actions/actions";

const CharacterForm = props => {
  const handleData = e => {
    e.preventDefault();
    props.getCharacter();
  };

  return (
    <div>
      <button onClick={handleData}>get Characters</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isFetchingData: state.isFetchingData
  };
};
export default connect(mapStateToProps, { getCharacter })(CharacterForm);
