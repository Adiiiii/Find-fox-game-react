import React, { createContext, useState } from "react";

interface User {
  name: string;
  id: number;
}
interface Context {
  activeUser?: User | {};
  setActiveUser?: any;
  scoreBoard?: object;
  UpdateScoreBoard?: any;
}

const intialData: Context = {};
export const UsersContext = createContext(intialData);

interface Props {
  children: React.ReactNode;
}
const UserDataProvider = ({ children }: Props) => {
  const [activeUser, setActiveUser] = useState({});
  const [scoreBoard, UpdateScoreBoard] = useState({});

  return (
    <UsersContext.Provider
      value={{ activeUser, setActiveUser, scoreBoard, UpdateScoreBoard }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UserDataProvider;
