import React, { useContext } from "react";
import { UsersContext } from "../../StateProviders/UserDataProvider";

const Scoreboard = () => {
  const { scoreBoard } = useContext(UsersContext);
  return <p>{scoreBoard?.name?.toString()}</p>;
};

export default Scoreboard;
