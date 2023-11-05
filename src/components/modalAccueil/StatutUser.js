import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FormConnexion from "../formAccueil/FormConnexion";
import FormDynamic from "../formAccueil/FormDynamic";
import { Dynamic } from "../../context/DynamicContext";
import PreviewRegister from "../preview/PreviewRegister";

const StatutUser = () => {
  const { infosRegister, setInfosRegister } = Dynamic();
  const [register, setRegister] = useState(true);

  useEffect(() => {
    setInfosRegister([]);
  }, [register]);

  return (
    <StyledStatutUser>
      {infosRegister[0] && (
        <>
          <strong onClick={() => setInfosRegister([])}>Annuler</strong>
          <PreviewRegister />{" "}
        </>
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
  padding: 5px;
  border-radius: 10px;
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
  strong {
    cursor: pointer;
  }
  span {
    cursor: pointer;
    user-select: none;
  }
  //884px = 768px
  @media screen and (max-width: 884px) {
    width: 55%;
  }

  //428px iphone 13
  @media screen and (max-width: 428px) {
    width: 85%;
  }
`;
