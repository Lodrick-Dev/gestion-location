import React from "react";
import styled from "styled-components";
import { Dynamic } from "../context/DynamicContext";
import Button from "./global/Button";

const Header = () => {
  const { locationUrl, setAuth, navigation, showHeader } = Dynamic();
  const logout = () => {
    setAuth("");
    navigation("/");
  };
  return (
    <StyledHeader
      $css={locationUrl.pathname}
      $cssMenu={showHeader}
      className="animate__animated animate__slideInUp"
    >
      <div>
        <Button actionClick={() => logout()} text={"Déconnexion"} />
      </div>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  transition: 0.3s;
  background: grey;
  display: ${({ $css }) => ($css === "/" ? "none" : "block")};
  position: absolute;
  bottom: ${({ $cssMenu }) => ($cssMenu ? "0px" : "-100px")};
  width: 100%;
  background: #150747;
  color: white;
  height: 12vh;
  div {
    width: 30%;
    height: 50%;
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
  }
`;
