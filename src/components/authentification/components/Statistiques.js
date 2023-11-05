import React, { useState } from "react";
import styled from "styled-components";
import ModalMenuStatistiques from "./ModalMenuStatistiques";
import Button from "../../global/Button";
import { Dynamic } from "../../../context/DynamicContext";
import Graphi from "./Graphi";
import Calend from "./Calendar";

import { TbHexagonLetterM } from "react-icons/tb";
import Popup from "../../reusable/Popup";

const Statistiques = () => {
  const { pop, setPop, naviStatiCalend, showHeader, setShowHeader } = Dynamic();
  const [locationBy, setLocationBy] = useState(false);

  //   const displayPop = (e) => {
  //     console.log(e);
  //     // setPop(!pop);
  //     if (e.target.textContent === "En cours") {
  //       //liste des biens en cours
  //       console.log("Les des biens en cours");
  //     }
  //   };
  return (
    <StyledStatistiques $cssmain={showHeader}>
      <ModalMenuStatistiques setLocationBy={setLocationBy} />
      {naviStatiCalend ? <Calend /> : <Graphi />}
      <h1>Statut et action des biens</h1>
      <div className="zone-btns">
        <Button
          actionClick={() => setPop("en-cours")}
          text={"En cours"}
          classCss="no-dispo"
        />
        <Button
          actionClick={() => setPop("dispo")}
          text={"Disponible"}
          classCss="dispo"
        />
        <Button
          actionClick={() => setPop("maintenance")}
          text={"En maintenance"}
          classCss="maintenance"
        />
        <Button
          actionClick={() => setPop("new-location")}
          text={"Nouvelle Location"}
          classCss="add-loca"
        />
        <Button
          actionClick={() => setPop("add-materiel")}
          text={"Ajouter un nouveau bien"}
          classCss="add-material"
        />
        <Popup />
      </div>
      <TbHexagonLetterM
        className="logo-menu"
        onClick={() => setShowHeader(!showHeader)}
      />
    </StyledStatistiques>
  );
};

export default Statistiques;
const StyledStatistiques = styled.div`
  background: url("../items/statistiques.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100%;

  .zone-btns {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  h1 {
    margin-top: 10px;
    text-align: center;
    text-decoration: underline;
  }
  .no-dispo {
    background: #ff8d8d;
    padding: 10px;
    /* box-shadow: 0px 0px 10px rgba(255, 141, 141, 0.7); */
    box-shadow: 0px 0px 10px #ff8d8db3;
    color: white;
  }
  .dispo {
    background: #71e07a;
    padding: 10px;
    box-shadow: 0px 0px 10px #71e07ab3;
    color: white;
  }
  .maintenance {
    background: #ff9900;
    padding: 10px;
    box-shadow: 0px 0px 10px #ff9900b3;
    color: white;
  }
  .add-loca {
    background: #3498db;
    padding: 10px;
    box-shadow: 0px 0px 10px #3498dbb3;
    color: white;
  }
  .add-material {
    background: #6c6c6c;
    color: #3498db;
    padding: 10px;
    box-shadow: 0px 0px 10px #3498dbb3;
  }
  //menu anim M
  .logo-menu {
    display: block !important;
    position: absolute;
    z-index: 50;
    bottom: ${({ $cssmain }) => ($cssmain ? "100px" : "10px")};
    font-size: 4em;
    color: #150747;
    filter: drop-shadow(3px 3px 1px #6c6c6c);
    cursor: pointer;
    transform: rotateY(45deg);
    animation: rotateAnimation 1s linear infinite;
  }
  @keyframes rotateAnimation {
    from {
      transform: rotateY(45deg);
    }
    to {
      transform: rotateY(225deg);
    }
  }
  .logo-menu:hover {
    animation-play-state: paused;
  }
`;
