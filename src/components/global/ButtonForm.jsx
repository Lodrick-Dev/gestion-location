import React from "react";
import styled from "styled-components";

const ButtonForm = ({ text }) => {
  return <StyledButtonForm>{text}</StyledButtonForm>;
};

export default ButtonForm;
const StyledButtonForm = styled.button`
  background: #eeee00;
  border: none;
  outline: none;
  padding: 5px;
  border-radius: 5px;
  width: 50%;
  font-size: 1.2em;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    transition: 0.3s;
    background: #f3ed7b;
  }
  //iphone 13 prox max 428px
  @media screen and (max-width: 428px) {
    width: 70%;
  }
`;
