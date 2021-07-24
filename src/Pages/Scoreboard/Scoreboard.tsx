import React, { useContext } from "react";
import { UsersContext, UserStats } from "../../StateProviders/UserDataProvider";
import { Wrapper, TableHead } from "./Scoreboard.styles";

const Scoreboard = () => {
  const { scoreBoard } = useContext(UsersContext);
  const sortedScoreBoard: UserStats[] = scoreBoard?.sort(
    (user1, user2) => user1.score - user2.score
  );
  return (
    <Wrapper>
      <p>Click the Fox! Game </p>
      <p>SCOREBOARD </p>
      <table>
        <tr>
          <TableHead scope="col">Rank</TableHead>
          <TableHead scope="col">Date</TableHead>
          <TableHead scope="col">Name</TableHead>
          <TableHead scope="col">Score</TableHead>
        </tr>
        {sortedScoreBoard.map((user, index) => (
          <tr>
            <TableHead scope="row">TR-7</TableHead>
            <td>{index}</td>
            <td>{user.date}</td>
            <td> {user.name}</td>
            <td>{user.score}</td>
          </tr>
        ))}
      </table>
    </Wrapper>
  );
};

export default Scoreboard;
