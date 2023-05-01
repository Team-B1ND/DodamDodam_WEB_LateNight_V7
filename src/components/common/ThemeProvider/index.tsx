import { ThemeProvider } from "styled-components";
import useTheme from "../../../hooks/theme/useTheme";
import GlobalStyle from "../../../styles/GlobalStyles";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ThemeProviderContainer = ({ children }: Props) => {
  const { themeColor } = useTheme();
  return (
    <ThemeProvider theme={themeColor}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
export default ThemeProviderContainer;
