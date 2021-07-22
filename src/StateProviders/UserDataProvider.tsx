import React, { createContext, useState } from "react";

export const UserContext = createContext({});

interface Props {
  children: React.ReactNode;
}
const UserDataProvider = ({ children }: Props) => {
  const [userData, setUserData] = useState({});
  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserDataProvider;
