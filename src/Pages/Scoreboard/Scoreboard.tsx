import React, { useContext } from "react";
import { UsersContext, UserStats } from "../../StateProviders/UserDataProvider";
import { Wrapper, TableHead, TableCell, TableRow } from "./Scoreboard.styles";

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
        <TableRow>
          <TableHead scope="col">Rank</TableHead>
          <TableHead scope="col">Name</TableHead>
          <TableHead scope="col">Date</TableHead>

          <TableHead scope="col">Score</TableHead>
        </TableRow>
        {sortedScoreBoard.map((user, index) => (
          <TableRow>
            <TableHead scope="row">{index}</TableHead>
            <TableCell> {user.name}</TableCell>

            <TableCell>{user.date}</TableCell>
            <TableCell>{user.score}</TableCell>
          </TableRow>
        ))}
      </table>
    </Wrapper>
  );
};

export default Scoreboard;
