import React, { useState } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import styled from "styled-components";
import ModalMenuStatistiques from "./ModalMenuStatistiques";
import Button from "../../global/Button";
import { Dynamic } from "../../../context/DynamicContext";

const Statistiques = () => {
  const { pop, setPop } = Dynamic();
  const [locationBy, setLocationBy] = useState(false);
  //quand locationBy sa valeur est "client" alors on retour,
  //tous les clients, et combien de fois ils ont loué
  //********* */
  //dans la data a l'index "location" ->
  //on doit savoir de quand a quand le bien n'est pas disponible
  //si cet index est vide alors c'est disponible
  //si c'est pas vide alors on vérifie la date indiqué dedans
  //pour savoir a partir de quand c'est et jusqu'a quand c'est louer
  const data = [
    {
      name: "Jane",
      maintenance: 1,
      age: 5,
      location: ["1", "Nel", "date 511313311"],
      date: "",
      locationBy: ["Marie", "steeve", "Nel", "Marièm"],
    },
    {
      name: "Rude",
      age: 1,
      location: 10,
      date: "",
      locationBy: [
        "Marcus",
        "Boub",
        "Caro",
        "Norla",
        "Paris",
        "Lili B",
        "Marie",
      ],
    },
    {
      name: "Monkey",
      age: 5,
      location: 20,
      date: "",
      locationBy: ["Martin", "Tintin", "Georgie"],
    },
    {
      name: "Louva",
      age: 10,
      location: 7,
      date: "",
      locationBy: ["Sophie", "Bibi", "Yvie"],
    },
    {
      name: "Le bouc",
      age: 4,
      location: 10,
      date: "",
      locationBy: [
        "Martin",
        "Tintin",
        "Georgie",
        "Sophie",
        "Bibi",
        "Yvie",
        "Nel",
        "Marièm",
      ],
    },
    {
      name: "Monster",
      age: 15,
      location: 1,
      date: "",
      locationBy: [
        "Marcus",
        "Boub",
        "Caro",
        "Norla",
        "Paris",
        "Lili B",
        "Marie",
        "Doe",
        "Marc",
      ],
    },
    {
      name: "Bad PPPPing",
      age: 3,
      location: 2,
      date: "",
      locationBy: ["Julie", "Georgie", "Sophie", "Bibi"],
    },
    {
      name: "Pouf",
      age: 1,
      location: 41,
      date: "",
      locationBy: [
        "Delphie",
        "Martin",
        "Tintin",
        "Georgie",
        "Sophie",
        "Bibi",
        "Yvie",
      ],
    },
    {
      name: "La grosse",
      age: 4,
      location: 8,
      date: "",
      locationBy: [
        "Bof",
        "Martin",
        "Tintin",
        "Georgie",
        "Sophie",
        "Bibi",
        "Yvie",
        "Martin",
        "Tintin",
        "Georgie",
        "Sophie",
        "Bibi",
        "Yvie",
      ],
    },
    {
      name: "La gros",
      age: 4,
      location: 8,
      date: "",
      locationBy: [
        "Yves",
        "Marcus",
        "Boub",
        "Caro",
        "Marcus",
        "Boub",
        "Caro",
        "Norla",
        "Paris",
        "Lili B",
        "Marie",
      ],
    },
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
      <div className="sous-before-graph">
        <span>
          Nombre de bien <strong>{data.length}</strong>
        </span>
        <ResponsiveContainer className="lolchart">
          <BarChart data={data} stroke="white">
            <XAxis dataKey={"name"} stroke="white" />
            {/* <YAxis /> */}
            <Bar
              barSize={40}
              //   dataKey={"location"}
              dataKey={"locationBy.length"}
              fill="#8884d8"
              label={renderCustomBarLabel}
              onClick={(e) => console.log(e)}
              className="bar"
              stroke="white"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
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

  .sous-before-graph {
    background: #292929cc;
    box-shadow: -7px 8px 14px 3px rgb(0 0 0 / 32%);
    backdrop-filter: blur(5px);
    height: 50vh;
    padding: 15px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
  }
  span {
    color: white;
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
