import React from "react";
import { MetricsWrapper, MetricWrapper, Score, Time } from "./Metrics.styles";

interface MetricProps {
  score: number;
  remainingTime: number;
}
const Metrics = ({ score = 0, remainingTime = 30 }: MetricProps) => (
  <MetricsWrapper>
    <MetricWrapper>
      <p>Score:</p>
      <Score>{score}</Score>
    </MetricWrapper>

    <MetricWrapper>
      <p>Time:</p>
      <Time time={remainingTime}>{remainingTime}</Time>
    </MetricWrapper>
  </MetricsWrapper>
);
export default Metrics;
