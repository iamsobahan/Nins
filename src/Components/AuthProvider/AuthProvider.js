import React, { createContext } from "react";
import useFirebase from "../../Hooks/useFarebase";


export const AuthContext = createContext();

const Authprovider = ({ children }) => {
  const allcontext = useFirebase();
  return (
    <AuthContext.Provider value={allcontext}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;
