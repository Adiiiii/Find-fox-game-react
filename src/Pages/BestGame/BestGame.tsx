import React from "react";
import { Heading, Wrapper } from "./BestGame.styles";
import Board from "../../Components/BestGame/Board/Board";
const BestGame = () => {
  return (
    <Wrapper>
      <Heading>Its Clicking time!</Heading>
      <Board />
    </Wrapper>
  );
};

export default BestGame;
