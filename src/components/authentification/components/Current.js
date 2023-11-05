import React from "react";
import styled from "styled-components";

const Current = () => {
  //ici doit avoir la possibilité de retiré ce qu'il y a en cours
  //au cas où intéruption par le client
  return (
    <StyledCurrent onClick={(e) => e.stopPropagation()}>Current</StyledCurrent>
  );
};

export default Current;
const StyledCurrent = styled.div`
  background: powderblue;
`;
