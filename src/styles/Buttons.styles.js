import styled from "styled-components";

export const ButtonsContainer = styled.div`
  padding: 10px;
  margin-bottom: 20px;
`;

export const ButtonsTitle = styled.h1``;

export const ButtonsDiv = styled.div`
  margin-block: 10px;
`;

export const ButtonInfoDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: -5px;
`;

export const ButtonIconSpan = styled.span`
  align-items: center;
  font-size: var(--font-micro);
`;

export const StButton = styled.button`
  background-color: ${(props) => props.backgroundColor || "transparent"};
  color: ${(props) => props.color};
  border-width: ${(props) => props.borderWidth || "1px"};
  border-style: solid;
  border-color: ${(props) => props.borderColor || "black"};
  padding: 12px 10px;
  width: ${(props) => props.width};
  border-radius: var(--size-border-radius);
  margin-right: 10px;
  font-weight: ${(props) => props.fontWeight || "var(--weight-regular)"};

  &:active{
    background-color: ${(props) => props.backgroundColorActive};
    color: ${(props) => props.colorActive};
    transform: translateY(2px);
  }
`;
