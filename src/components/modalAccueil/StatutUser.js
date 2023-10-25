import React, { useState } from "react";
import styled from "styled-components";
import FormConnexion from "../formAccueil/FormConnexion";
import FormOne from "../formAccueil/FormOne";

const StatutUser = () => {
  const [register, setRegister] = useState(false);
  return (
    <StyledStatutUser>
      {register ? <FormOne /> : <FormConnexion />}
      <span onClick={() => setRegister(!register)}>
        {register ? "Je me connecte" : "Pas encore inscrit ?"}
      </span>
    </StyledStatutUser>
  );
};

export default StatutUser;

const StyledStatutUser = styled.div`
  background: #f56647f7;
  border-radius: 10px;
  height: 40vh;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: -10px 14px 19px -3px rgba(0, 0, 0, 0.45);
  span {
    cursor: pointer;
    user-select: none;
  }
`;
