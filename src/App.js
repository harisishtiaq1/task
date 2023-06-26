import './App.css';
import Layout from "./Components/Layout/Layout"
import About from './Components/about/About';
import Addwatermark from './Components/about/Addwatermark';
import DrawerAppBar from './Components/appbar/Appbar';
import Home from './Components/home/Home';
function App() {
  return (
    <>
      <DrawerAppBar/>
      <Home/>
      <About/>
      <Addwatermark/>
      <Layout/>
    </>
  );
}

export default App;
