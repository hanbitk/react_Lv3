import styled from "styled-components";

export const StSelectsContainer = styled.div`
  border: 2px solid var(--color-light-gray);
  padding: 10px;
  margin-bottom: 20px;
  height: 200px;
  overflow: hidden;
`;

export const StSelectsTitle = styled.h1``;

export const StSelectsDiv = styled.div`
  margin-top: 10px;
  display: flex;
`;

export const StSelectButton = styled.button`
  border: 1px solid var(--color-light-gray);
  width: var(--size-extra-large);
  padding: 10px 20px;
  border-radius: var(--size-border-radius);
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
  font-size: var(--font-regular);
`;

export const StSelectBox = styled.div`
  position: ${(props) => props.position};
  margin-top: 10px;
`;

export const StSelectBoxOptions = styled.div`
  border: 1px solid var(--color-light-gray);
  width: var(--size-extra-large);
  border-radius: var(--size-border-radius);
  text-align: left;
  background-color: var(--color-white);
  overflow: hidden;
`;

export const StOptions = styled.div`
  padding: 10px 20px;
  &:hover {
    background-color: var(--color-light-gray);
  }
`;
