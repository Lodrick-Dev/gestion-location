import React, { useState } from "react";
import styled from "styled-components";
import ButtonForm from "../../global/ButtonForm";

const AddLocation = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    location: "",
    start: "",
    end: "",
    description: "",
  });

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleAddLoca = (e) => {
    e.preventDefault();
    // console.log(e);
    console.log("Data send :", formData);
  };
  return (
    <StyledAddLocation onClick={(e) => e.stopPropagation()}>
      <h2>Ajouter une nouvelle location</h2>
      <form onSubmit={(e) => handleAddLoca(e)}>
        <input
          type="text"
          placeholder="Nom*"
          name="nom"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Email*"
          name="email"
          onChange={handleChange}
        />
        <select name="location" onChange={handleChange}>
          <option value="">--Location--</option>
          <option value="La joconde">La joconde</option>
          <option value="Arc">Arc</option>
          <option value="Bateau">Bateau</option>
        </select>
        <div className="div-sous-add-laco">
          <div>
            <label htmlFor="from">De :</label>
            <input type="date" id="from" name="start" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="to">Jusqu'au : </label>
            <input type="date" id="to" name="end" onChange={handleChange} />
          </div>
        </div>
        <textarea
          placeholder="Description"
          name="description"
          onChange={handleChange}
        ></textarea>
        <ButtonForm text={"Ajouter"} />
      </form>
    </StyledAddLocation>
  );
};

export default AddLocation;

const StyledAddLocation = styled.div`
  width: 50%;
  padding: 15px;
  background: #6c6c6c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #3498dbb3;
  h2 {
    font-size: 1.8em;
    margin-bottom: 10px;
    color: #3498db;
  }
  form {
    width: 60%;
    padding: 10px;
    display: flex;
    flex-direction: column;

    input,
    select,
    div > div > input {
      margin-bottom: 10px;
      padding: 5px;
      outline: none;
      border: none;
      border-radius: 5px;
      font-size: 1.2em;
      cursor: pointer;
    }
    div > label {
      color: #3498db;
      margin-right: 5px;
    }
    textarea {
      cursor: pointer;
      outline: none;
      height: 10vh;
      padding: 5px;
      border: none;
      margin-bottom: 10px;
      border-radius: 5px;
      font-size: 1.2em;
    }
  }
  .div-sous-add-laco {
    margin: 10px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      border-bottom: solid 2px #3498db;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;
