import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
const DynamicContext = createContext();
export const DynamicContextProvider = ({ children }) => {
  const locationUrl = useLocation();
  const [user, setUser] = useState(null); //l'info de celuii qui est connecté
  const [naviStatiCalend, setNaviStatiCalend] = useState(false);
  const [pop, setPop] = useState(false); //pour affiché les infos complé
  const [infosRegister, setInfosRegister] = useState([]); //to register temporaire
  const [auth, setAuth] = useState(""); //to navigue vers authentification
  const navigation = useNavigate();
  const paramsUrl = useParams();
  return (
    <DynamicContext.Provider
      value={{
        locationUrl,
        user,
        setUser,
        pop,
        setPop,
        infosRegister,
        setInfosRegister,
        auth,
        setAuth,
        navigation,
        paramsUrl,
        naviStatiCalend,
        setNaviStatiCalend,
      }}
    >
      {children}
    </DynamicContext.Provider>
  );
};
export const Dynamic = () => {
  return useContext(DynamicContext);
};
