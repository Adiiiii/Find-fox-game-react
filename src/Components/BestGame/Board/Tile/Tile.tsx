import React from "react";
import { Image } from "./Tile.styles";
interface TileProps {
  url: string;
  animalName: string;
  onUserSelect: any;
}
const Tile = ({ url, animalName, onUserSelect }: TileProps) => {
  return (
    <Image
      onClick={onUserSelect}
      src={url}
      width="100"
      height="100"
      alt={animalName}
    />
  );
};

export default Tile;
