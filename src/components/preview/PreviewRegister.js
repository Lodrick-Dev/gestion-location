import React from "react";
import { Dynamic } from "../../context/DynamicContext";

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
  return (
    <div>
      {infosRegister.map((item, index) => (
        <div key={index}>{renderInfo(item, index)}</div>
      ))}
    </div>
  );
};

export default PreviewRegister;
