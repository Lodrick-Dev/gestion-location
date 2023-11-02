import React, { useState } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import styled from "styled-components";
import ModalMenuStatistiques from "./ModalMenuStatistiques";
import Button from "../../global/Button";
import { Dynamic } from "../../../context/DynamicContext";
import Graphi from "./Graphi";
import Calendar from "./Calendar";

const Statistiques = () => {
  const { pop, setPop, naviStatiCalend } = Dynamic();
  const [locationBy, setLocationBy] = useState(false);

  const displayPop = (e) => {
    console.log(e);
    // setPop(!pop);
    if (e.target.textContent === "En cours") {
      //liste des biens en cours
      console.log("Les des biens en cours");
    }
  };
  return (
    <StyledStatistiques>
      <ModalMenuStatistiques setLocationBy={setLocationBy} />
      {naviStatiCalend ? <Calendar /> : <Graphi />}
      <div className="zone-btns">
        <Button
          actionClick={(e) => displayPop(e)}
          text={"En cours"}
          classCss="no-dispo"
        />
        <Button text={"Disponible"} classCss="dispo" />
        <Button text={"En maintenance"} classCss="maintenance" />
        <Button text={"Nouvelle Location"} classCss="add-loca" />
        <Button text={"Ajouter un nouveau bien"} classCss="add-material" />
      </div>
    </StyledStatistiques>
  );
};

export default Statistiques;
const StyledStatistiques = styled.div`
  background: url("../items/statistiques.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;

  .zone-btns {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
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
`;
