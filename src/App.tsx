import "./App.css";
import { Header } from "./components/header";
import { About } from "./sections/about";
import { Blog } from "./sections/blog";
import { Brands } from "./sections/brands";
import { Contact } from "./sections/contact";
import { Footer } from "./sections/footer";
import { Home } from "./sections/home";
import { Minisales } from "./sections/minisales";
import { Services } from "./sections/services";

function App() {

  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Minisales />
      <Blog />
      <Brands />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
