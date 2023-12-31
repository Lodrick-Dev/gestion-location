import React, { useState } from "react";
import styled from "styled-components";
import { Dynamic } from "../../../context/DynamicContext";

const ModalMenuStatistiques = ({ setLocationBy }) => {
  const { naviStatiCalend, setNaviStatiCalend } = Dynamic();
  return (
    <StyledModalMenuStatistiques>
      <div className="nav-stati-calend">
        <h1>{naviStatiCalend ? "Calendrier" : "Statistiques"}</h1>
        <h2 onClick={() => setNaviStatiCalend(!naviStatiCalend)}>
          {naviStatiCalend ? "Statistiques" : "Calendrier"}
        </h2>
      </div>
      {!naviStatiCalend ? (
        <div className="box-select">
          <select
            onChange={(e) =>
              setLocationBy(e.target.value === "biens" ? false : true)
            }
          >
            <option value="biens">Les biens</option>
            <option value="clients">Les clients</option>
          </select>
        </div>
      ) : undefined}
    </StyledModalMenuStatistiques>
  );
};

export default ModalMenuStatistiques;

const StyledModalMenuStatistiques = styled.div`
  /* background: greenyellow; */
  width: 100%;
  margin: 0px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .nav-stati-calend {
    display: flex;
    padding: 10px;
    align-items: center;
    /* background: green; */
  }
  .nav-stati-calend > h1 {
    font-size: 2.3em;
    margin: 10px 15px;
    text-decoration: underline;
  }
  .nav-stati-calend > h2 {
    font-size: 1.3em;
    cursor: pointer;
  }
  select {
    text-align: center;
    margin: 5px auto;
    padding: 5px;
    width: 100%;
    border: none;
    outline: none;
    border-radius: 3px;
    cursor: pointer;
  }
  //responsive
  //884px = 768px
  @media screen and (max-width: 884px) {
    .box-select {
      /* background: green; */
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    select {
      width: 20%;
      /* background: red; */
    }
  }

  //428px iphone 13 promax
  @media screen and (max-width: 428px) {
    .nav-stati-calend > h1 {
      font-size: 1.9em;
    }
    .nav-stati-calend > h2 {
      font-size: 1em;
    }
    select {
      width: 50%;
    }
  }
`;
