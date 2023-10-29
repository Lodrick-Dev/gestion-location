import React from "react";
import styled from "styled-components";

const ThreeInput = ({ setEmail, setPassword, setCodeAcces }) => {
  return (
    <StyledThreeInput className="animate__animated animate__bounceInRight animate__faster">
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Mot de passe"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Code d'accès"
        onChange={(e) => setCodeAcces(e.target.value)}
      />
    </StyledThreeInput>
  );
};

export default ThreeInput;
const StyledThreeInput = styled.div`
  background: green;
`;
