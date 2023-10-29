import React, { useState } from "react";
import styled from "styled-components";
import FormConnexion from "../formAccueil/FormConnexion";
import FormDynamic from "../formAccueil/FormDynamic";
import { Dynamic } from "../../context/DynamicContext";

const StatutUser = () => {
  const [register, setRegister] = useState(true);
  const { infosRegister, setInfosRegister } = Dynamic();
  return (
    <StyledStatutUser>
      {infosRegister[0] && (
        <strong onClick={() => setInfosRegister([])}>Annuler</strong>
      )}
      {register ? <h2>Inscription</h2> : <h2>Connexion</h2>}
      {register ? <FormDynamic /> : <FormConnexion />}
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
  height: 50vh;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: -10px 14px 19px -3px rgba(0, 0, 0, 0.45);
  h2 {
    font-size: 2em;
    margin-bottom: 10px;
  }
  span {
    cursor: pointer;
    user-select: none;
  }
`;
