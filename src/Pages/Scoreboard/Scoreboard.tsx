import React, { useContext } from "react";
import { UsersContext } from "../../StateProviders/UserDataProvider";

const Scoreboard = () => {
  const { activeUser } = useContext(UsersContext);

  return <p>{activeUser?.name?.toString()}</p>;
};

export default Scoreboard;
