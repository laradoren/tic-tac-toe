import styled from "styled-components";
import {LayoutProps} from "./Game";

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export const Row = styled.div<LayoutProps>`
  display: flex;
  flex-direction: row;
  gap: ${(props => props.gap)}px;
`;

export const Column = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props => props.gap)}px;
`;

export const StyledSquare = styled.button`
  width: 70px;
  height: 70px;
  background: #fff;
  border: 1px solid #FAF0CA;
  padding: 0;
  font-size: 50px;
  color: #000;
`;

export const Button = styled.button`
  border: none;
  padding: 5px 10px;
  font-size: 24px;
  color: #000;
  margin-top: 50px;
  background: #FAF0CA;
`;