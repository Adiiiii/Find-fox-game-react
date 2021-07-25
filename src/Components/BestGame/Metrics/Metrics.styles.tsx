import styled from "styled-components";
import { COLORS, FONT_SIZE } from "../../../Constants/Styles";

export const MetricsWrapper = styled.div`
  display: flex;
  margin: auto;
  justify-content: space-between;
  font-size: ${FONT_SIZE.xl};
  width: 70%;
`;

export const MetricWrapper = styled.div`
  display: flex;
`;

export const Score = styled.p`
  color: ${COLORS.black};
  margin-left: 5px;
`;

interface TimeProps {
  time: number;
}
export const Time = styled.p<TimeProps>`
  margin-left: 5px;
  color: ${({ time }) => (time > 10 ? COLORS.black : COLORS.red)};
`;
