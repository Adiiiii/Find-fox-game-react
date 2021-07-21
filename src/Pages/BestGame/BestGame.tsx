import React from "react";
import { Heading, Wrapper } from "./BestGame.styles";
import Board from "./Board/Board";
const BestGame = () => {
  return (
    <Wrapper>
      <Heading>Best game indeed</Heading>
      <Board />
      {/* tile board starts */}
    </Wrapper>
  );
};

export default BestGame;
