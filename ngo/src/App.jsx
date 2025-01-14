import "./App.css";
import Aboutus from "./pages/aboutus";
import { Header } from "./components/header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <header>
        <Header/>
      </header>

      <Aboutus />
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
