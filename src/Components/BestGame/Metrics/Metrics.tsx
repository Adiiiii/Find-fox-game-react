import React from "react";
import { MetricsWrapper } from "./Metrics.styles";

interface MetricProps {
  score: number;
  remainingTime: number;
}
const Metrics = ({ score = 0, remainingTime = 30 }: MetricProps) => (
  <MetricsWrapper>
    <p>Score: {score}</p>
    <p>Time: {remainingTime}</p>
  </MetricsWrapper>
);
export default Metrics;
