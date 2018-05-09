import styled from "styled-components";
import media from "./media";

export const Button = styled.button`
  height: 200px;
  width: 200px;

  &:hover {
    background-color: blue;
  }
`;

export const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
`;

export const AppContainer = styled.div`
  text-align: center;

  ${media.tablet`
    background-color: pink;
  `};
`;
