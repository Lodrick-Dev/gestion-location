import React from "react";
import styled from "styled-components";

const TwoInput = ({ setName, setPrenom }) => {
  return (
    <StyledTwoInput className="animate__animated animate__bounceInRight animate__faster">
      <input
        type="text"
        placeholder="Nom"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Prénom"
        onChange={(e) => setPrenom(e.target.value)}
      />
    </StyledTwoInput>
  );
};

export default TwoInput;

const StyledTwoInput = styled.div`
  background: red;
`;
