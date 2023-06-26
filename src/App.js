import { ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import About from "./Components/about/About";
import Addwatermark from "./Components/about/Addwatermark";
import DrawerAppBar from "./Components/appbar/Appbar";
import Home from "./Components/home/Home";
function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins, sans-serif",
      fontWeightBold: "600",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <DrawerAppBar />
      <Home />
      <About />
      <Addwatermark />
      <Layout />
    </ThemeProvider>
  );
}

export default App;
