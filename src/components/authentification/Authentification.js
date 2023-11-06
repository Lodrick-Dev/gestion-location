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
  /* height: 100vh; */

  //428px iphone 13 promax
  /* @media screen and (max-width: 428px) {
    height: 140vh;
  } */
`;
