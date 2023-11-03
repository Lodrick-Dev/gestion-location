import React from "react";
import styled from "styled-components";
import AddLocation from "../authentification/forms/AddLocation";
import { Dynamic } from "../../context/DynamicContext";

const Popup = () => {
  const { pop, setPop } = Dynamic();
  const chooseCompo = () => {
    return <AddLocation />;
  };
  return (
    <StyledPopup $css={pop} onClick={() => setPop(!pop)}>
      {chooseCompo()}
    </StyledPopup>
  );
};

export default Popup;
const StyledPopup = styled.div`
  display: ${({ $css }) => ($css ? "flex" : "none")};
  background: #292929cc;
  position: absolute;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  z-index: 15;
  height: 100vh;
  width: 80%;
  margin: 0px auto;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`;
