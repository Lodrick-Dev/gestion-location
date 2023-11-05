import React from "react";
import styled from "styled-components";

const AddNewMaterial = () => {
  return (
    <StyledAddNewMaterial onClick={(e) => e.stopPropagation()}>
      <h2>Ajout un nouveau bien</h2>
      <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <textarea placeholder="Description"></textarea>
      </form>
    </StyledAddNewMaterial>
  );
};

export default AddNewMaterial;

const StyledAddNewMaterial = styled.div`
  background: red;
`;
