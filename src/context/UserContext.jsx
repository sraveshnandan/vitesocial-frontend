import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [Id, setId] = useState("");
  const [UserName, setUserName] = useState("");
  return (<UserContext.Provider value={{ Id, setId, UserName, setUserName }}>{children}</UserContext.Provider>)
}
