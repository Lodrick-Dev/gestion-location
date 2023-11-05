import React from "react";
import styled from "styled-components";
import ButtonForm from "../../global/ButtonForm";

const AddNewMaterial = () => {
  return (
    <StyledAddNewMaterial onClick={(e) => e.stopPropagation()}>
      <h2>Ajouter un nouveau bien</h2>
      <form>
        <input type="text" placeholder="Nom*" />
        <input type="number" placeholder="Longeur en m*" />
        <input type="number" placeholder="Largeur en m*" />
        <input type="number" placeholder="Hauteur en m*" />
        <input type="number" placeholder="Poids en kg*" />
        <textarea placeholder="Description"></textarea>
        <ButtonForm text={"Ajouter"} />
      </form>
    </StyledAddNewMaterial>
  );
};

export default AddNewMaterial;

const StyledAddNewMaterial = styled.div`
  background: #3498db;
  color: white;
  width: 50%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #3498dbb3;
  h2 {
    font-size: 1.8em;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    padding: 10px;
    input {
      width: 100%;
      margin-bottom: 10px;
      padding: 5px;
      outline: none;
      border: none;
      border-radius: 5px;
      font-size: 1.2em;
      cursor: pointer;
    }
    textarea {
      width: 100%;
      cursor: pointer;
      outline: none;
      height: 10vh;
      padding: 5px;
      border: none;
      margin-bottom: 10px;
      border-radius: 5px;
      font-size: 1.2em;
    }
  }
`;
