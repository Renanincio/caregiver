import "./App.css";
import { Header } from "./components/header";
import { About } from "./sections/about";
import { Home } from "./sections/home";
import { Services } from "./sections/services";

function App() {

  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
    </>
  );
}

export default App;
