import React from "react";
import styled from "styled-components";

const AddLocation = () => {
  return (
    <StyledAddLocation onClick={(e) => e.stopPropagation()}>
      <h2>Ajout une nouvelle location</h2>
      <form>
        <input type="text" placeholder="Nom*" />
        <input type="text" placeholder="Email*" />
        <input type="date" />
        <textarea placeholder="Description"></textarea>
      </form>
    </StyledAddLocation>
  );
};

export default AddLocation;

const StyledAddLocation = styled.div`
  background: greenyellow;
`;
