import React from "react";
import { StButton } from "../../../styles/Buttons.styles";

function DangerMediumButton({buttonName}) {
  return (
    <>
      <StButton
        width="var(--size-medium)"
        backgroundColor="var(--color-light-red)"
        borderColor="var(--color-light-red)"
        color="var(--color-red)"
        backgroundColorActive="var(--color-red)"
        colorActive="var(--color-white)"
      >
        {buttonName}
      </StButton>
    </>
  );
}

export default DangerMediumButton;
