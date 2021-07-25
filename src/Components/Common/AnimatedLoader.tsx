import React from "react";
import { StyledLoader } from "./AnimatedLoader.styles";
import { COLORS } from "../../Constants/Styles";

const AnimatedLoader = () => (
  <StyledLoader
    type="Bars"
    color={COLORS.yellow_dark}
    height={300}
    width={300}
  />
);

export default AnimatedLoader;
