import React from "react";
import styled from "styled-components";

const Maintenance = () => {
  //doit pouvoir retiré de maintenance et envoyé dans dispo
  return (
    <StyledMaintenance onClick={(e) => e.stopPropagation()}>
      Maintenance
    </StyledMaintenance>
  );
};

export default Maintenance;
const StyledMaintenance = styled.div`
  background: greenyellow;
`;
