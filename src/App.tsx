import Header from "./components/Header/Header";
import { ThemeProvider } from "@mui/material";
import { theme } from "./customTheme";
import About from "./components/about/About";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <About />
    </ThemeProvider>
  );
}

export default App;
// #3671E9
