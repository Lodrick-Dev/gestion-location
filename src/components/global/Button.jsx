import React from "react";
import styled from "styled-components";

const Button = ({ actionClick, text }) => {
  return <StyledButton onClick={actionClick}>{text}</StyledButton>;
};

export default Button;

const StyledButton = styled.div`
  background: green;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  width: 30%;
  text-align: center;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  color: #fff;
`;
