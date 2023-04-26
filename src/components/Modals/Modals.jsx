import React, { useState } from "react";
import {
  ModalsContainer,
  ModalsTitle,
  ModalsDiv,
  ModalOpen,
  ModalContent,
  ModalContentDiv,
  ModalContentP,
  ModalContentButtonDiv,
} from "../../styles/Modals";
import PrimarySmallButton from "../Buttons/PrimaryButtons/PrimarySmallButton";
import DangerLargeButton from "../Buttons/DangerButtons/DangerLargeButton";
import DangerSmallButton from "../Buttons/DangerButtons/DangerSmallButton";

function Modals() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenOut, setIsModalOpenOut] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleModalOut = () => {
    setIsModalOpenOut(!isModalOpenOut);
  };

  return (
    <ModalsContainer>
      <ModalsTitle>Modals</ModalsTitle>
      <ModalsDiv>
        {/* Open and Close Modal by clicking on buttons */}
        <PrimarySmallButton
          buttonName={"open modal"}
          onClick={toggleModal}
        ></PrimarySmallButton>
        <ModalOpen style={{ display: isModalOpen ? "block" : "none" }}>
          <ModalContent>
            <ModalContentP>
              닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
              않아요.
            </ModalContentP>
            <ModalContentButtonDiv>
              <DangerSmallButton
                buttonName={"닫기"}
                onClick={toggleModal}
              ></DangerSmallButton>
              <PrimarySmallButton buttonName={"확인"}></PrimarySmallButton>
            </ModalContentButtonDiv>
          </ModalContent>
        </ModalOpen>

        {/* Open and Close Modal by clicking outside content */}
        <DangerLargeButton
          buttonName={"open modal"}
          onClick={toggleModalOut}
        ></DangerLargeButton>

        <ModalOpen
          style={{ display: isModalOpenOut ? "block" : "none" }}
          onClick={toggleModalOut}
        ></ModalOpen>

        <ModalContent style={{ display: isModalOpenOut ? "block" : "none" }}>
          <ModalContentDiv>
            <ModalContentP>
              닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.
            </ModalContentP>
            <ModalContentButtonDiv>
              <DangerSmallButton
                buttonName={"닫기"}
                onClick={toggleModalOut}
              ></DangerSmallButton>
            </ModalContentButtonDiv>
          </ModalContentDiv>
        </ModalContent>
        
      </ModalsDiv>
    </ModalsContainer>
  );
}

export default Modals;
