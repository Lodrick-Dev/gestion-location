import React, { useState } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import styled from "styled-components";
import ModalMenuStatistiques from "./ModalMenuStatistiques";
import Button from "../../global/Button";

const Statistiques = () => {
  const [locationBy, setLocationBy] = useState(false);
  const data = [
    { name: "Jane", age: 5, location: 5, date: "", locationBy: "Marie" },
    { name: "Rude", age: 1, location: 10, date: "", locationBy: "Marcus" },
    { name: "Monkey", age: 5, location: 20, date: "", locationBy: "Martin" },
    { name: "Louva", age: 10, location: 7, date: "", locationBy: "Sophie" },
    { name: "Le bouc", age: 4, location: 10, date: "", locationBy: "Manon" },
    { name: "Monster", age: 15, location: 1, date: "", locationBy: "Doe" },
    { name: "Bad PPPPing", age: 3, location: 2, date: "", locationBy: "Julie" },
    { name: "Pouf", age: 1, location: 41, date: "", locationBy: "Delphie" },
    { name: "La grosse", age: 4, location: 8, date: "", locationBy: "Bof" },
    { name: "La gros", age: 4, location: 8, date: "", locationBy: "Yves" },
    { name: "osse", age: 4, location: 20, date: "", locationBy: "Macro" },
    { name: "La rose", age: 4, location: 51, date: "", locationBy: "Poss" },
    { name: "Lasse", age: 4, location: 5, date: "", locationBy: "Boum" },
    { name: "Grosse", age: 4, location: 12, date: "", locationBy: "Jam" },
  ];
  const renderCustomBarLabel = ({ payload, x, y, width, height, value }) => {
    return (
      <text
        x={x + width / 2}
        y={y}
        fill="#666"
        textAnchor="middle"
        dy={-6}
      >{`${value}`}</text>
    );
  };
  return (
    <StyledStatistiques>
      <ModalMenuStatistiques setLocationBy={setLocationBy} />
      <div className="sous-before-graph">
        <ResponsiveContainer className="lolchart">
          <BarChart data={data} stroke="white">
            <XAxis
              dataKey={locationBy ? "locationBy" : "name"}
              stroke="white"
            />
            {/* <YAxis /> */}
            <Bar
              barSize={40}
              dataKey={"location"}
              fill="#8884d8"
              label={renderCustomBarLabel}
              onClick={(e) => alert(e.name)}
              className="bar"
              stroke="white"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="zone-btns">
        <Button text={"En cours"} classCss="no-dispo" />
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

  .sous-before-graph {
    background: #292929cc;
    box-shadow: -7px 8px 14px 3px rgb(0 0 0 / 32%);
    backdrop-filter: blur(5px);
    height: 50vh;
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
  }
  .lolchart {
    height: 80% !important;
    width: 80% !important;
  }
  .bar {
    cursor: pointer;
  }
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
