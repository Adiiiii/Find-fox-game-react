import styled from "styled-components";
import { FONT_SIZE, COLORS } from "../../Constants/Styles";
import { Link } from "react-router-dom";

export const WelcomeScreenWrapper = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  padding: 20px;
  align-items: center;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: 50%;
`;

export const Label = styled.p`
  margin: 0 12px 0 0;
  padding: 0;
`;

export const LinkButton = styled(Link)<{ disableLink: boolean }>`
  background: ${COLORS.yellow};
  color: ${COLORS.black};
  text-decoration: none;
  border-radius: 10px;
  border: 1px solid ${COLORS.black};
  padding: 16px 30px;
  pointer-events: ${(props) => (props.disableLink ? "none" : "auto")};
  background: ${(props) => (props.disableLink ? COLORS.white : COLORS.yellow)};
  border-color: ${(props) =>
    props.disableLink ? COLORS.yellow_dark : COLORS.yellow};
`;

export const InputWrapper = styled.div`
  display: flex;
  margin: auto;
  flex-wrap: wrap;
  margin-bottom: 300px;
  align-items: center;
  /* this center alignment would help when this row wraps */
  justify-content: center;
`;

export const NameInput = styled.input`
  border-radius: 5px;
  font-size: ${FONT_SIZE.large};
  width: 150px;
`;
