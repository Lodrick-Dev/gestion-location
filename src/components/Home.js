import React from "react";
import styled from "styled-components";
import FormOne from "./formAccueil/FormOne";

const Home = () => {
  return (
    <HomeStyled>
      <div className="sous-home">
        <FormOne />
        <span>Pas encore inscrit ?</span>
      </div>
    </HomeStyled>
  );
};

export default Home;
const HomeStyled = styled.div`
  height: 100vh;
  background: url("./items/homenoconnect.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  .sous-home {
    height: 40vh;
    width: 50%;
    background: red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
