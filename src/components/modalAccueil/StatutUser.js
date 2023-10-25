import React, { useState } from "react";
import styled from "styled-components";
import FormConnexion from "../formAccueil/FormConnexion";
import FormOne from "../formAccueil/FormOne";

const StatutUser = () => {
  const [register, setRegister] = useState(false);
  return (
    <StyledStatutUser>
      {register ? <FormOne /> : <FormConnexion />}
      <span onClick={() => setRegister(!register)}>Pas encore inscrit ?</span>
    </StyledStatutUser>
  );
};

export default StatutUser;

const StyledStatutUser = styled.div`
  background: red;
  height: 30vh;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    cursor: pointer;
    user-select: none;
  }
`;
