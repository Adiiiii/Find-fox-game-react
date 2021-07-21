import React from "react";
import Loader from "react-loader-spinner";

const AnimatedLoader = () => (
  <Loader
    type="Bars"
    color="#00BFFF"
    height={300}
    width={300}
    style={{
      position: "fixed",
      left: "50%",
      top: "50%",
      transform: "translate(-50%, -50%)"
    }}
  />
);

export default AnimatedLoader;
