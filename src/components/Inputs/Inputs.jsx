import React, { useState } from "react";
import {
  InputsContainer,
  InputsTitle,
  InputsForm,
  InputNameLabel,
  InputPriceLabel,
  StInput,
} from "../../styles/Inputs.styles";
import PrimarySmallButton from "../Buttons/PrimaryButtons/PrimarySmallButton";

function Inputs() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const priceChangeHandler = (e) => {
    setPrice(inputPriceFormat(e.target.value));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (name === "" || price === "") {
      alert("이름과 값을 입력해주세요.");
    } else {
      alert(
        `{Name: ${name}, Price: ${price
          .split(",")
          .reduce((curr, acc) => curr + acc, "")}}`
      );
      setName("");
      setPrice("0");
    }
  };

  const inputPriceFormat = (str) => {
    const comma = (str) => {
      str = String(str);
      return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
    };

    const uncomma = (str) => {
      str = String(str);
      return str.replace(/[^\d]+/g, "");
    };
    return comma(uncomma(str));
  };

  return (
    <InputsContainer>
      <InputsTitle>Inputs</InputsTitle>
      <InputsForm onSubmit={submitHandler}>
        <InputNameLabel>
          이름
          <StInput type="text" value={name} onChange={nameChangeHandler} />
        </InputNameLabel>

        <InputPriceLabel>
          금액
          <StInput type="text" value={price} onChange={priceChangeHandler} />
        </InputPriceLabel>
        <PrimarySmallButton buttonName={"저장"}></PrimarySmallButton>
      </InputsForm>
    </InputsContainer>
  );
}

export default Inputs;
