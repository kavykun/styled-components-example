import styled from "styled-components";
import buttonStyles from "./buttonSyles";
import * as T from "../../theme";

export const Button = T.Button.extend`
  color: ${({ primary }) => (primary ? "white" : "yellow")};
  background-color: ${({ theme }) => theme.button.color};
  ${buttonStyles};
`;
