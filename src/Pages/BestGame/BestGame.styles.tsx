import styled from "styled-components";
import { FONT_SIZE } from "../../Constants/Styles";

export const Heading = styled.h1`
  font-size: ${FONT_SIZE.xxl};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: column;
  max-width: 400px;
  padding: 20px;
`;
