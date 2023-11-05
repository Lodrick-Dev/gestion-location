import React from "react";
import styled from "styled-components";
import ButtonForm from "../global/ButtonForm";
import { useState } from "react";
import { FaRegLaughBeam } from "react-icons/fa";
import { TbMoodNeutral } from "react-icons/tb";
import { Dynamic } from "../../context/DynamicContext";

const FormConnexion = () => {
  const { setAuth, navigation } = Dynamic();
  const [showMdp, setShowMdp] = useState(false);
  const [inputEmail, setInputEmail] = useState("");
  const [inputMdp, setInputMdp] = useState("");
  const param = "Entreprise C";
  const handleConnect = async (e) => {
    e.preventDefault();
    if (!inputEmail || !inputMdp) return alert("Veuillez remplir les champs");
    //on vérifie si user dans la database
    //puis on passe name entrepris en param
    setAuth("Entreprise");
    navigation(`/auth/${param}`);
  };
  return (
    <StyledFormConnexion
      className="animate__animated animate__backInRight animate__faster"
      onSubmit={(e) => handleConnect(e)}
    >
      <input
        type="email"
        placeholder="Email*"
        onChange={(e) => setInputEmail(e.target.value)}
      />
      <div className="div">
        <input
          type={showMdp ? "text" : "password"}
          placeholder="Mot de passe*"
          onChange={(e) => setInputMdp(e.target.value)}
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

  //884px = 768px
  @media screen and (max-width: 884px) {
    width: 90%;
  }
  //428px iphone 13 pro max
  @media screen and (max-width: 428px) {
    width: 100%;
    input,
    .div > input {
      font-size: 1.3em;
    }
  }
`;
