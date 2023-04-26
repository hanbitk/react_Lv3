import React, { Children } from "react";
import { StButton } from "../../../../src/styles/Buttons.styles";

function PrimaryMediumButton({buttonName}) {
  return (
    <>
      <StButton
        width="var(--size-medium)"
        backgroundColor="var(--color-light-green)"
        borderColor="var(--color-light-green)"
        color="var(--color-green)"
        backgroundColorActive="var(--color-green)"
        colorActive="var(--color-white)"
      >
        {buttonName}
      </StButton>
    </>
  );
}

export default PrimaryMediumButton;
