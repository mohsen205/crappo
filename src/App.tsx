import Header from "./components/Header/Header";
import { ThemeProvider } from "@mui/material";
import { theme } from "./customTheme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
// #3671E9
