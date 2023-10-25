import React from "react";
import styled from "styled-components";
import ButtonForm from "../global/ButtonForm";
import { useState } from "react";
import { FaRegLaughBeam } from "react-icons/fa";
import { TbMoodNeutral } from "react-icons/tb";

const FormConnexion = () => {
  const [showMdp, setShowMdp] = useState(false);
  const handleConnect = async (e) => {
    e.preventDefault();
    alert("ok bro");
  };
  return (
    <StyledFormConnexion
      className="animate__animated animate__backInRight animate__faster"
      onSubmit={(e) => handleConnect(e)}
    >
      <h2>Connexion</h2>
      <input type="email" placeholder="Email" />
      <div className="div">
        <input
          type={showMdp ? "text" : "password"}
          placeholder="Mot de passe"
        />
        {showMdp ? (
          <FaRegLaughBeam
            className="icon-laugh"
            onClick={() => setShowMdp(!showMdp)}
          />
        ) : (
          <TbMoodNeutral
            className="icon-laugh"
            onClick={() => setShowMdp(!showMdp)}
          />
        )}
      </div>
      <ButtonForm text={"Je me connecte 😆"} />
    </StyledFormConnexion>
  );
};

export default FormConnexion;

const StyledFormConnexion = styled.form`
  /* background: green; */
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  h2 {
    font-size: 2em;
    margin-bottom: 10px;
  }
  .div {
    width: 100%;
    position: relative;
    /* margin-bottom: 10px; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
    margin-bottom: 10px;
  }
  input,
  .div > input {
    padding: 5px;
    width: 80%;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 1.2em;
  }
  .div > .icon-laugh {
    position: absolute;
    right: 50px;
    top: 5px;
    z-index: 5;
    font-size: 1.5em;
    cursor: pointer;
  }
  input:focus {
    transition: 0.1s;
    border-bottom: solid 3px #00a3ee;
  }
`;
