import React from "react";
import styled from "styled-components";
import StatutUser from "./modalAccueil/StatutUser";

const Home = () => {
  return (
    <HomeStyled>
      <StatutUser />
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
`;
