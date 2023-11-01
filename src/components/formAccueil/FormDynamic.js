import React, { useState } from "react";
import Button from "../global/Button";
import styled from "styled-components";
import { Dynamic } from "../../context/DynamicContext";
import ThreeInput from "./ThreeInput";
import TwoInput from "./TwoInput";

const FormDynamic = () => {
  const { infosRegister, setInfosRegister } = Dynamic();
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [codeAcces, setCodeAcces] = useState("");
  const next = (e) => {
    e.preventDefault();
    if (company) {
      setInfosRegister((prev) => [...prev, company]);
      setCompany("");
      console.log(infosRegister);
      return;
    }
    if (name && prenom) {
      setInfosRegister((prev) => [...prev, name, prenom]);
      setName("");
      setPrenom("");
      return;
    }
    if (email && password && codeAcces) {
      setInfosRegister((prev) => [...prev, email, password, codeAcces]);
      goRegister(email, password, codeAcces);
      setEmail("");
      setPassword("");
      setCodeAcces("");
      return;
    }
  };

  const goRegister = (email, password, codeAcces) => {
    //send database👇
    if (infosRegister.length === 3 && email && password && codeAcces) {
      alert("Inscription");
      setInfosRegister([]);
      return;
    }
    //send database👆
  };
  return (
    <StyledFormDynamic
      className="animate__animated animate__backInUp animate__faster"
      onSubmit={(e) => next(e)}
    >
      {!infosRegister.length ? (
        <input
          type="text"
          placeholder="Entreprise*"
          onChange={(e) => setCompany(e.target.value)}
        />
      ) : infosRegister.length > 1 ? (
        <ThreeInput
          setEmail={setEmail}
          setPassword={setPassword}
          setCodeAcces={setCodeAcces}
        />
      ) : (
        <TwoInput setName={setName} setPrenom={setPrenom} />
      )}
      <Button actionClick={(e) => next(e)} text={"Suivant 😎"} />
    </StyledFormDynamic>
  );
};

export default FormDynamic;
const StyledFormDynamic = styled.form`
  width: 70%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: solid 2px #0781b9;
  margin-bottom: 10px;
  input {
    padding: 5px;
    width: 80%;
    border: none;
    outline: none;
    border-radius: 5px;
    font-size: 1.2em;
    margin-bottom: 10px;
  }
  input:focus {
    transition: 0.1s;
    border-bottom: solid 3px #00a3ee;
  }
`;
