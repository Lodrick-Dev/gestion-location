import React from "react";
import styled from "styled-components";

const Dispo = () => {
  //ici doit pouvoir envoyé en maintenance
  return <StyledDispo onClick={(e) => e.stopPropagation()}>Dispo</StyledDispo>;
};

export default Dispo;

const StyledDispo = styled.div`
  background: blueviolet;
`;
