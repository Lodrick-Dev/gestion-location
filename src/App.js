import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "animate.css";
import RoutePrivate from "./components/private/RoutePrivate";
import Authentification from "./components/authentification/Authentification";
import Header from "./components/Header";
import { Dynamic } from "./context/DynamicContext";

const App = () => {
  //ici on check le cookie de l'user
  //et envoie le user à /auth/:id
  const { showHeader } = Dynamic();
  return (
    <>
      {showHeader ? <Header /> : undefined}
      <Routes>
        <Route path="*" element={<Home />} />
        <Route
          path="/auth/:id"
          element={
            <RoutePrivate>
              <Authentification />
            </RoutePrivate>
          }
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
