import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Tile from "./Tile/Tile";
import { BoardWrapper } from "./Board.styles";
import { getRandomNumber } from "../../../Helpers/BestGame.helper";
import { getImageUrl } from "../../../Services/BoardGame.service";
import Metrics from "../../../Components/BestGame/Metrics/Metrics";
import AnimatedLoader from "../../../Components/Common/AnimatedLoader";

interface GridData {
  [key: string]: {
    url: string;
    animalName: "fox" | "cat" | "dog";
  };
}

const Board = () => {
  const BOARD_LENGTH = 9;
  const TIME = 30;
  const initialData: GridData = {};

  const [boardData, setBoardData] = useState(initialData);
  const [score, setScore] = useState(0);
  const [apiInProgress, setApiInPorgress] = useState(false);
  const [remainingTime, setRemainingTime] = useState(TIME);
  const history = useHistory();

  const generateBoardData = async () => {
    setApiInPorgress(true);
    const gridData: GridData = {};
    const foxTileIndex = getRandomNumber();
    for (let i = 1; i <= BOARD_LENGTH; i++) {
      const animalName = i === foxTileIndex ? "fox" : "dog";
      const resp = await getImageUrl(animalName);
      gridData[i] = {
        url: resp.data.message || resp.data.image || resp.data.file || "",
        animalName
      };
    }
    setBoardData(gridData);
    setApiInPorgress(false);
  };

  useEffect(() => {
    generateBoardData();
  }, []);

  // start the timer once boardData refreshes
  useEffect(() => {
    let timer: any;
    timer = setInterval(() => {
      console.log(remainingTime);
      if (remainingTime === 0) {
        clearInterval(timer);
        history.push("/scoreboard");
      } else {
        setRemainingTime(remainingTime - 1);
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [remainingTime]);

  const clickHandler = (selectedAnimal: "fox" | "cat" | "dog") => {
    if (selectedAnimal === "fox") {
      setScore(score + 1);
    } else {
      setScore(score ? score - 1 : 0);
    }
    generateBoardData();
  };

  return (
    <>
      {console.log("re-rendered")}
      <Metrics score={score} remainingTime={remainingTime} />
      <BoardWrapper>
        {Object.keys(boardData).length
          ? Object.keys(boardData).map((key) => (
              <Tile
                onUserSelect={() => clickHandler(boardData[key].animalName)}
                key={boardData[key].url}
                url={boardData[key].url}
                animalName={boardData[key].animalName}
              />
            ))
          : null}
        {apiInProgress && <AnimatedLoader />}
      </BoardWrapper>
    </>
  );
};

export default Board;
