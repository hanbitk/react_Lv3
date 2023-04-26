import React from "react";
import {
  ButtonIconSpan,
  StButton,
} from "../../../../src/styles/Buttons.styles";

function PrimaryLargeButton({ onClick, buttonName, children }) {
  return (
    <>
      <StButton
        width="var(--size-large)"
        borderWidth="2px"
        borderColor="var(--color-light-green)"
        color="var(--color-green)"
        fontWeight="var(--weight-bold)"
        onClick={onClick}
      >
        {buttonName}
        <ButtonIconSpan>{children}</ButtonIconSpan>
      </StButton>
    </>
  );
}

export default PrimaryLargeButton;
