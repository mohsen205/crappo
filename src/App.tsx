import Header from "./components/Header/Header";
import { ThemeProvider } from "@mui/material";
import { theme } from "./customTheme";
import About from "./components/about/About";
import Cryptocurrencies from "./components/cryptocurrencies/Cryptocurrencies";
import Features from "./components/features/Features";
import StartMining from "./components/StartMining/StartMining";
import Footer from "./components/footer/Index";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <About />
      <Cryptocurrencies />
      <Features />
      <StartMining />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
// #3671E9
