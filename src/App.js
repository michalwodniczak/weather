import { WeatcherApp } from "./features/WeatcherApp";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./globalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <WeatcherApp />
    </ThemeProvider>

  );
}

export default App;
