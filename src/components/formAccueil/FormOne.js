import React from "react";
import Button from "../global/Button";
import styled from "styled-components";

const FormOne = () => {
  const next = () => {
    alert("yvyv");
  };
  return (
    <StyledFormOne className="animate__animated animate__backInUp animate__faster">
      <input type="text" placeholder="Entreprise" />
      <Button actionClick={() => next()} text={"OK 😎"} />
    </StyledFormOne>
  );
};

export default FormOne;
const StyledFormOne = styled.div`
  /* background: red; */
  width: 70%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: solid 2px #0781b9;
  margin-bottom: 10px;
  input {
    padding: 5px;
    width: 80%;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 1.2em;
    margin-bottom: 10px;
  }
  input:focus {
    transition: 0.1s;
    border-bottom: solid 3px #00a3ee;
  }
`;
