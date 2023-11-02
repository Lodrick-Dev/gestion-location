import React from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis } from "recharts";
import styled from "styled-components";

const Graphi = () => {
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
  return (
    <StyledGraphi>
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
    </StyledGraphi>
  );
};

export default Graphi;

const StyledGraphi = styled.div`
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
`;
