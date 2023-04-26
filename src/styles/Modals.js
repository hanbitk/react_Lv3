import styled from "styled-components";

export const ModalsContainer = styled.div`
  padding: 10px;
  margin-bottom: 20px;
`;

export const ModalsTitle = styled.h1``;

export const ModalsDiv = styled.div`
  margin-block: 10px;
`;

export const ModalOpen = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(221, 221, 221, 0.8);
`;

export const ModalContent = styled.div`
  background-color: var(--color-white);
  border-radius: var(--size-border-radius);
  z-index: 2;
  position: fixed;
  top: 25%;
  left: 32%;
  margin: 0 auto;
  padding: 20px;
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ModalContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalContentP = styled.p``;

export const ModalContentButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;
