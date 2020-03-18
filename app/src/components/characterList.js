import React from "react";
import { connect } from "react-redux";

const CharacterList = props => {
  console.log(props.characters);
  return (
    <div>
      {props.characters.map(character => (
        <p>{character.name}</p>
      ))}
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    characters: state.characters,
    isFetchingData: state.isFetchingData
  };
};

export default connect(mapStatetoProps, {})(CharacterList);
