import React, { useEffect } from "react";
import styled from "styled-components";
import AddLocation from "../authentification/forms/AddLocation";
import { Dynamic } from "../../context/DynamicContext";
import { MdOutlineClose } from "react-icons/md";
import AddNewMaterial from "../authentification/forms/AddNewMaterial";
import Current from "../authentification/components/Current";
import Dispo from "../authentification/components/Dispo";
import Maintenance from "../authentification/components/Maintenance";

const Popup = () => {
  const { pop, setPop } = Dynamic();
  const chooseCompo = () => {
    switch (pop) {
      case "en-cours":
        return <Current />;
      case "dispo":
        return <Dispo />;
      case "maintenance":
        return <Maintenance />;
      case "new-location":
        return <AddLocation />;
      case "add-materiel":
        return <AddNewMaterial />;

      default:
        break;
    }
  };
  useEffect(() => {
    const body = document.querySelector("body");
    //remove overflow when pop display
    const remvOverflow = () => {
      if (pop) {
        body.classList.add("rmv");
      } else {
        body.classList.remove("rmv");
      }
    };
    remvOverflow();
  }, [pop]);
  return (
    <StyledPopup $css={pop} onClick={() => setPop("")}>
      <MdOutlineClose className="btn-close-pop" />
      {chooseCompo()}
    </StyledPopup>
  );
};

export default Popup;
const StyledPopup = styled.div`
  display: ${({ $css }) => ($css ? "flex" : "none")};
  background: #292929cc;
  position: fixed;
  backdrop-filter: blur(5px);
  justify-content: center;
  align-items: center;
  z-index: 15;
  height: 100vh;
  width: 80%;
  margin: 0px auto;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  .btn-close-pop {
    color: red;
    font-size: 2em;
    position: fixed;
    top: 50px;
    cursor: pointer;
  }
  //responsive
  //884px = 768px
  @media screen and (max-width: 884px) {
    width: 100%;
    .btn-close-pop {
      top: 150px;
    }
  }
  //428px iphone 13 pro max
  @media screen and (max-width: 428px) {
    width: 100%;
    .btn-close-pop {
      top: 100px;
    }
  }
`;
