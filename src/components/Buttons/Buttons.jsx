import React from "react";
import {
  ButtonsContainer,
  ButtonsDiv,
  ButtonsTitle,
} from "../../styles/Buttons.styles";
import PrimaryLargeButton from "./PrimaryButtons/PrimaryLargeButton";
import PrimaryMediumButton from "./PrimaryButtons/PrimaryMediumButton";
import PrimarySmallButton from "./PrimaryButtons/PrimarySmallButton";
import DangerLargeButton from "./DangerButtons/DangerLargeButton";
import DangerMediumButton from "./DangerButtons/DangerMediumButton";
import DangerSmallButton from "./DangerButtons/DangerSmallButton";
import { FaAngleRight, FaInfo } from "react-icons/fa";

function Button() {
  const largeDangerButton = () => {
    prompt("어렵나요?");
  };

  const largePrimaryButton = () => {
    alert("버튼을 만들어보세요!");
  };
  return (
    <ButtonsContainer>
      <ButtonsTitle>Buttons</ButtonsTitle>

      <ButtonsDiv>
        <PrimaryLargeButton buttonName={"Large Primary Button"} onClick={largePrimaryButton}>
          <FaAngleRight />
        </PrimaryLargeButton>
        <PrimaryMediumButton buttonName={"Medium"}></PrimaryMediumButton>
        <PrimarySmallButton buttonName={"Small"}></PrimarySmallButton>
      </ButtonsDiv>

      <ButtonsDiv>
        <DangerLargeButton
          buttonName={"Large Danger Button"}
          onClick={largeDangerButton}
        >
          <FaInfo />
        </DangerLargeButton>
        <DangerMediumButton buttonName={"Medium"}></DangerMediumButton>
        <DangerSmallButton buttonName={"Small"}></DangerSmallButton>
      </ButtonsDiv>
    </ButtonsContainer>
  );
}

export default Button;
