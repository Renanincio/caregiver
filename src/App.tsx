import "./App.css";
import { Header } from "./components/header";
import { About } from "./sections/about";
import { Contact } from "./sections/contact";
import { Footer } from "./sections/footer";
import { Home } from "./sections/home";
import { Services } from "./sections/services";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
