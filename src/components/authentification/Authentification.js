import React from "react";
import styled from "styled-components";
import Statistiques from "./components/Statistiques";

const Authentification = () => {
  return (
    <StyledAuthentification>
      <Statistiques />
    </StyledAuthentification>
  );
};

export default Authentification;
const StyledAuthentification = styled.div`
  /* background: grey; */
  height: 100vh;
`;
