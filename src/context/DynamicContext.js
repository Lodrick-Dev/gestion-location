import { createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
const DynamicContext = createContext();
export const DynamicContextProvider = ({ children }) => {
  const locationUrl = useLocation();
  const [user, setUser] = useState(null);
  const [pop, setPop] = useState(false);
  const [infosRegister, setInfosRegister] = useState([]);
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
      }}
    >
      {children}
    </DynamicContext.Provider>
  );
};
export const Dynamic = () => {
  return useContext(DynamicContext);
};
