import React from "react";
import styled from "styled-components";

const Button = ({ actionClick, text, classCss }) => {
  return (
    <StyledButton onClick={actionClick} className={classCss} $css={classCss}>
      {text}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  background: ${({ $css }) => (!$css ? "#eeee00" : undefined)};
  /* background: #eeee00; */
  border: none;
  outline: none;
  cursor: pointer;
  padding: 5px;
  font-size: 1.2em;
  font-weight: 700;
  border-radius: 5px;
  /* width: 30%; */
  text-align: center;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  color: #353935;
  margin-top: 10px;
  @media screen and (max-width: 884px) {
    /* width: 50%; */
  }

  /* //iphone 13 prox max 428px
  @media screen and (min-width: 425px) {
    width: 70%;
  } */
  //iphone 13 390px
  @media screen and (max-width: 428px) {
    font-size: 0.8em;
    /* width: 20%; */
  }
`;
