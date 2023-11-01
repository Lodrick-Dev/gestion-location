import React from "react";
import styled from "styled-components";

const Button = ({ actionClick, text }) => {
  return <StyledButton onClick={actionClick}>{text}</StyledButton>;
};

export default Button;

const StyledButton = styled.div`
  background: #eeee00;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 5px;
  font-size: 1.2em;
  font-weight: 700;
  border-radius: 5px;
  width: 30%;
  text-align: center;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  color: #353935;
  margin-top: 10px;
`;
