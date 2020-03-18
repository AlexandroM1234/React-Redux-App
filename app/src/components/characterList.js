import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledDiv = styled.div`
  border: red 2px solid;
  border-radius: 15px;
  margin: 8%;
  padding: 2%;
`;

const CharacterList = props => {
  console.log(props.characters);
  return (
    <div>
      {props.characters.map(character => (
        <StyledDiv>{character.name}</StyledDiv>
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
