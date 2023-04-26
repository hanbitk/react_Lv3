import React from "react";
import {
  StSelectsContainer,
  StSelectsTitle,
  StSelectsDiv,
} from "../../styles/Selects.styles";
import SelectVisible from "./SelectVisible";

function Selects() {
  return (
    <StSelectsContainer>
      <StSelectsTitle>Selects</StSelectsTitle>

      <StSelectsDiv>
        <div>
          <SelectVisible position="absolute" />
        </div>
        <div>
          <SelectVisible />
        </div>
      </StSelectsDiv>
    </StSelectsContainer>
  );
}

export default Selects;
