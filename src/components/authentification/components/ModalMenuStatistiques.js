import React from "react";
import styled from "styled-components";

const ModalMenuStatistiques = ({ setLocationBy }) => {
  return (
    <StyledModalMenuStatistiques>
      <h1>Statistiques</h1>
      <select
        onChange={(e) =>
          setLocationBy(e.target.value === "biens" ? false : true)
        }
      >
        <option value="biens">Les biens</option>
        <option value="clients">Les clients</option>
      </select>
    </StyledModalMenuStatistiques>
  );
};

export default ModalMenuStatistiques;

const StyledModalMenuStatistiques = styled.div`
  /* background: greenyellow; */
  width: 15%;
  margin: 0px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 2.3em;
    margin: 10px auto;
    text-decoration: underline;
  }
  select {
    text-align: center;
    margin: 5px auto;
    padding: 5px;
    width: 100%;
    border: none;
    outline: none;
    border-radius: 3px;
    cursor: pointer;
  }
`;
