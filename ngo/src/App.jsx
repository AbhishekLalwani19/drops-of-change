import "./App.css";
import Aboutus from "./pages/aboutus";
import { Header } from "./components/header";

function App() {
  return (
    <>
      <header>
        <Header/>
      </header>

      <Aboutus />
    </>
  );
}

export default App;
