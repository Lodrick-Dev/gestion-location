import React from "react";
import styled from "styled-components";
import { Dynamic } from "../context/DynamicContext";
import Button from "./global/Button";

const Header = () => {
  const { setAuth, navigation } = Dynamic();
  const logout = () => {
    setAuth("");
    navigation("/");
  };
  return (
    <StyledHeader className="animate__animated animate__slideInUp">
      <div>
        <Button actionClick={() => logout()} text={"Déconnexion"} />
      </div>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  transition: 3s;
  background: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -20px;
  width: 100%;
  background: #150747;
  color: white;
  padding: 15px;
  height: 15vh;
  div {
    width: 30%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
  }
`;
