import React from "react";
import styled from "styled-components";

const Home = () => {
  return <HomeStyled>Home</HomeStyled>;
};

export default Home;
const HomeStyled = styled.div`
  height: 100vh;
  background: url("./items/homenoconnect.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
