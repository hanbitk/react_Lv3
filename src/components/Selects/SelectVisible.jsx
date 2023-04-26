import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import {
  StSelectButton,
  StSelectBox,
  StSelectBoxOptions,
  StOptions,
} from "../../styles/Selects.styles";

function SelectVisible({position}) {
  const [isSelectOption, setIsSelectOption] = useState(false);
  const [optionName, setOptionName] = useState("리액트");

  const optionArray = ["리액트", "자바", "스프링", "리액트네이티브"];

  const toggleSelectOption = () => {
    setIsSelectOption(!isSelectOption);
  };

  const selectOption = (optionName) => {
    setOptionName(optionName);
  };
  return (
    <>
      <StSelectButton onClick={toggleSelectOption}>
        {optionName}
        <IoIosArrowDown />
      </StSelectButton>

      <StSelectBox position={position}>
        <StSelectBoxOptions
          style={{
            display: isSelectOption ? "block" : "none",
          }}
          onClick={toggleSelectOption}
        >
          {optionArray.map((option, idx) => {
            return (
              <StOptions key={idx} onClick={() => selectOption(option)}>
                {option}
              </StOptions>
            );
          })}
        </StSelectBoxOptions>
      </StSelectBox>
    </>
  );
}

export default SelectVisible;
