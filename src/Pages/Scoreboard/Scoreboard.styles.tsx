import styled from "styled-components";
import { COLORS } from "../../Constants/Styles";

export const Wrapper = styled.div`
  display: flex;
  width: 60%;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TableHead = styled.th`
  border: 1px solid rgb(190, 190, 190);
  background-color: ${COLORS.gray_dark};
  color: #fff;
  padding: 8px 14px;
  &:nth-child(2) {
    min-width: 150px;
  }
  &:nth-child(3) {
    min-width: 100px;
  }
`;

export const TableCell = styled.td`
  padding: 0 10px;
  &:nth-child(2) {
    text-align: left;
  }
  &:nth-child(4) {
    text-align: right;
  }
`;

export const TableRow = styled.tr`
  background-color: ${COLORS.gray_light};
  &:nth-child(even) {
    background-color: ${COLORS.gray_medium};
  }
`;

export const ActionWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  ::focus {
    color: ${COLORS.white};
  }
`;
