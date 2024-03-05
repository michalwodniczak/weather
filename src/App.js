import { WeatcherApp } from "./features/WeatcherApp";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <WeatcherApp />
    </ThemeProvider>

  );
}

export default App;
