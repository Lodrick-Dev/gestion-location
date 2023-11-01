import React from "react";
import { Dynamic } from "../../context/DynamicContext";
import styled from "styled-components";

const PreviewRegister = () => {
  const { infosRegister } = Dynamic();
  const renderInfo = (item, index) => {
    let label = "";
    switch (index) {
      case 0:
        label = "Entreprise";
        break;
      case 1:
        label = "Nom";
        break;
      case 2:
        label = "Prénom";
        break;
      default:
        label = "";
    }
    return (
      <div key={index}>
        {label && (
          <div>
            <strong>{label} : </strong>
          </div>
        )}
        <p>{item}</p>
      </div>
    );
  };

  //view web
  return (
    <StyledPreviewRegister>
      {infosRegister.map((item, index) => (
        <div key={index}>{renderInfo(item, index)}</div>
      ))}
    </StyledPreviewRegister>
  );
};

export default PreviewRegister;

const StyledPreviewRegister = styled.div`
  background: blue;
  /* width: 80%; */
  padding: 10px;
  display: flex;
  justify-content: space-evenly;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
  }
`;
