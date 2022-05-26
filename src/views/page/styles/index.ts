import styled from "styled-components"
import { UI } from "../../../constants";

export const Body = styled.div<{ isDarkTheme: boolean }>`
  height: 100vh;
  width: 100vw;
  background-color: ${({ isDarkTheme }) => isDarkTheme ? UI.COLORS.COLORS_THEME.DARK_SECONDARY : UI.COLORS.COLORS_THEME.LIGTH_SECONDARY};
  transition: all 0.4s ease-in;
`;